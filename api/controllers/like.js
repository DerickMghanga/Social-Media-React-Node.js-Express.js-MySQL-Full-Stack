import jwt from "jsonwebtoken";
import { db } from "../connect.js";


export const getLikes = (req, res) => {
    console.log(req.query);
    const { postId } = req.query;

    const q = `SELECT c.*, u.id AS userId, name, profilePic FROM comments AS c JOIN users AS u ON (u.id = c.userId) WHERE c.postId = (?) ORDER BY c.createdAt DESC`;

    db.query(q, [postId], (err, data) => {
        if (err) return res.status(500).json(err);
        
        return res.status(200).json(data);
    });
}