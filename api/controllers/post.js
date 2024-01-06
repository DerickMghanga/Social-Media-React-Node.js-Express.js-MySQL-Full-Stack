import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from 'moment';

export const getPosts = (req, res) => {
  //console.log(req.cookies.accessToken);
  const { userId } = req.query;

  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json({ message: "Not logged in!" });

  jwt.verify(token, process.env.TOKEN_SECRET, (err, userInfo) => {
    if (err) return res.status(403).json({ message: "Invalid Token!" });

    //console.log(userInfo);

    console.log(userId);

    const q = userId !== "undefined" ? `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE p.userId = ? ORDER BY p.createdAt DESC` :
      `SELECT p.*, u.id AS userId, name, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId = ? OR p.userId = ? ORDER BY p.createdAt DESC`;

    const values = userId !== "undefined" ? [userId] : [userInfo.id, userInfo.id];

    db.query(q, values , (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  });
};

//Add New Post
export const addPost = (req, res) => {
    const {desc, img} = req.body;
    const token = req.cookies.accessToken;

    if (!token) return res.status(401).json({ message: "Not logged in!" });
  
    jwt.verify(token, process.env.TOKEN_SECRET, (err, userInfo) => {
      if (err) return res.status(403).json({ message: "Invalid Token!" });
  
      //console.log(userInfo);
  
      const q = "INSERT INTO posts (`desc`, `img`, `userId`, `createdAt`) VALUES (?)"

      const values = [
        desc,
        img,
        userInfo.id,
        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      ]
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
  
        return res.status(200).json({message: "Post has been created!"});
      });
    });
}
