import express from "express";
import { upload } from "../multer.js";

const router = express.Router();

router.post("/", upload.single("file"), (req, res) => {
    const file = req.file;  //file name after upload to server file system(uploads folder)

    res.status(200).json(file.filename);  //respond the file name
})

export default router;