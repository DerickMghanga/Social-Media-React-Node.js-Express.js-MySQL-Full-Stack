import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

//fetch comments per post
export const getComments = (req, res) => {
    //console.log(req.query);
    const { postId } = req.query;

    const q = `SELECT c.*, u.id AS userId, name, profilePic FROM comments AS c JOIN users AS u ON (u.id = c.userId) WHERE c.postId = (?) ORDER BY c.createdAt DESC`;

    db.query(q, [postId], (err, data) => {
        if (err) return res.status(500).json(err);
        
        return res.status(200).json(data);
    });
};


//Add new comment in a Post
export const addComment = (req, res) => {
    console.log()
    const {desc, postId} = req.body;
    const token = req.cookies.accessToken;

    if (!token) return res.status(401).json({ message: "Not logged in!" });
  
    jwt.verify(token, process.env.TOKEN_SECRET, (err, userInfo) => {
      if (err) return res.status(403).json({ message: "Invalid Token!" });
  
      //console.log(userInfo);
  
      const q = "INSERT INTO comments (`desc`, `userId`, `createdAt`, `postId`) VALUES (?)"

      const values = [
        desc,
        userInfo.id,
        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        postId
      ]
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
  
        return res.status(200).json({message: "Comment has been created!"});
      });
    });
}
