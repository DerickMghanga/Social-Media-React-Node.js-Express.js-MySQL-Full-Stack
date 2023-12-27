import jwt from "jsonwebtoken";
import { db } from "../connect.js";


export const getLikes = (req, res) => {
    //console.log(req.query);
    const { postId } = req.query;

    const q = `SELECT userId FROM likes WHERE postId = ?`;

    db.query(q, [postId], (err, data) => {
        if (err) return res.status(500).json(err);
        
        return res.status(200).json(data.map(like=>like.userId));  //map the numbers instea of displaying as objects
    });
}