import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getUser = (req, res) => {
    const userId = req.params.userId;
    //console.log(req.params);

    //const token = req.cookies.accessToken;

    const q = "SELECT * FROM users WHERE id = ?";

    db.query(q, [userId], (err, data) => {
        if (err) return res.status(500).json(err);

        const {password, ...others} = data[0]  //return all info except password

        return res.status(200).json(others);
    });
};
