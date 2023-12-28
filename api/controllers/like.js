import jwt from "jsonwebtoken";
import { db } from "../connect.js";

//fetch likes in a Post
export const getLikes = (req, res) => {
    //console.log(req.query);
    const { postId } = req.query;

    const q = `SELECT userId FROM likes WHERE postId = ?`;

    db.query(q, [postId], (err, data) => {
        if (err) return res.status(500).json(err);
        
        return res.status(200).json(data.map(like=>like.userId));  //map the userId instead of displaying as objects
    });
}

//add like to a Post
export const addLike = (req, res) => {
    //console.log()
    const { postId } = req.body;
    const token = req.cookies.accessToken;

    if (!token) return res.status(401).json({ message: "Not logged in!" });
  
    jwt.verify(token, process.env.TOKEN_SECRET, (err, userInfo) => {
      if (err) return res.status(403).json({ message: "Invalid Token!" });
  
      //console.log(userInfo);
  
      const q = "INSERT INTO likes (`userId`, `postId`) VALUES (?)"

      const values = [
        userInfo.id,
        postId
      ]
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
  
        return res.status(200).json({message: "Like added to the post!"});
      });
    });
}

export const deleteLike = (req, res) => {
    //console.log(req.query);
    const { postId } = req.query;
    const token = req.cookies.accessToken;

    if (!token) return res.status(401).json({ message: "Not logged in!" });
  
    jwt.verify(token, process.env.TOKEN_SECRET, (err, userInfo) => {
      if (err) return res.status(403).json({ message: "Invalid Token!" });
  
      //console.log(userInfo);
  
      const q = "DELETE FROM likes WHERE `userId` = ? AND `postId` = ?";

      const values = [
        userInfo.id,
        postId
      ]
  
      db.query(q, [ userInfo.id, postId ], (err, data) => {
        if (err) return res.status(500).json(err);
  
        return res.status(200).json({message: "Like deleted from the post!"});
      });
    });
}