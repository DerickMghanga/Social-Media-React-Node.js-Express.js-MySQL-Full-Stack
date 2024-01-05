import { db } from "../connect.js";
import jwt from "jsonwebtoken";

//fetch user info
export const getUser = (req, res) => {
    const userId = req.params.userId;
    //console.log(req.params);

    //const token = req.cookies.accessToken;

    const q = "SELECT * FROM users WHERE id = ?";

    db.query(q, [userId], (err, data) => {
        if (err) return res.status(500).json(err);

        const { password, ...others } = data[0]; //return all info except password

        return res.status(200).json(others);
    });
};

//update user info
export const updateUser = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json({ message: "Not Authenticated" });

  jwt.verify(token, process.env.TOKEN_SECRET, (err, userInfo) => {
    if (err) return res.status(403).json("Invalid Token!");

  })
};
