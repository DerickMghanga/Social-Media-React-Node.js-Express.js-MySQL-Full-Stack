import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';


//REGISTER USER
export const register = (req, res) => {

    console.log(req.body);

    const {username, email, password, name} = req.body;

    //CHECK IF USER EXISTS
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [username], (err, data) => {
        if(err) return res.status(500).json(err);  //if there is an error
        // console.log("DB Connected!");

        if(data.length) return res.status(409).json({message: "User already exists"});

        //CREATE A NEW USER if username doesn't exist
        //hash the password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const q = "INSERT INTO users (username, email, password, name) VALUES (?)"

        const values = [username, email, hashedPassword, name];

        db.query(q, [values], (err, data)=>{
            if(err) return res.status(500).json(err);

            return res.status(201).json({message: "User has been created!"});
        })

        
    })


}


//LOGIN USER
export const login = (req, res) => {
    const {username, password} = req.body;
    console.log(req.body);

    const q = "SELECT * FROM users WHERE username = ?";

    db.query(q, [username, password], (err, data) => {  //returns 'data' as an array
        if(err) return res.status(500).json(err);

        if (data.length === 0) return res.status(404).json({message: "User not found!"});

        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password);

        if(!checkPassword) return res.status(401).json({message: "Wrong Password or Username!"});

        //create token(for user functionality ie delete post, like post, comment etc)
        const token = jwt.sign({id: data[0].id}, process.env.TOKEN_SECRET);

        //desctructure user Info(data[0]), only send back data without password 
        const {password, ...others} = data[0]

        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json(others);
    })
}


//LOGOUT USER
export const logout = (req, res) => {
    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none",
    }).status(200).json({message: "User Logout successfull!"});
}