import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getRelationships = (req, res) => {
  //console.log(req.query);
  const { followedUserId } = req.query;

  const q = `SELECT followerUserId FROM relationships WHERE followedUserId = ?`;

  db.query(q, [followedUserId], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data.map((relationship) => relationship.followerUserId)); //map the userId instead of displaying as objects
  });
};


export const addRelationships = (req, res) => {
  //console.log()
  const { userId } = req.body;
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json({ message: "Not logged in!" });

  jwt.verify(token, process.env.TOKEN_SECRET, (err, userInfo) => {
    if (err) return res.status(403).json({ message: "Invalid Token!" });

    //console.log(userInfo);

    const q = "INSERT INTO relationships (`followerUserId`, `followedUserId`) VALUES (?)";

    const values = [userInfo.id, userId];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json({ message: "Following User!" });
    });
  });
};


export const deleteRelationships = (req, res) => {
  //console.log(req.query);
  const { userId } = req.query;
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json({ message: "Not logged in!" });

  jwt.verify(token, process.env.TOKEN_SECRET, (err, userInfo) => {
    if (err) return res.status(403).json({ message: "Invalid Token!" });

    //console.log(userInfo);

    const q = "DELETE FROM relationships WHERE `followerUserId` = ? AND `followedUserId` = ?";

    const values = [userInfo.id, userId];

    db.query(q, [userInfo.id, userId], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json({ message: "Unfollowed User!" });
    });
  });
};
