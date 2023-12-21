import express  from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import 'dotenv/config';   //new ES6 way

import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import postRoutes from "./routes/posts.js";


const app = express();
const PORT = process.env.PORT;


//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());
// app.use(bodyParser())




// ROUTES
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/likes', likeRoutes);


app.listen(PORT, ()=> {
    console.log(`Server running in PORT: ${PORT}`);
})