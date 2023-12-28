import express  from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import 'dotenv/config';   //new ES6 way

import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import postRoutes from "./routes/posts.js";
import relationshipsRoutes from "./routes/relationships.js";
import uploadRoute from "./routes/upload.js";


const app = express();
const PORT = process.env.PORT;


//middlewares
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Credentials", true);  //allow withCredentials from client
    next();
})
app.use(cors({
    origin: ["http://localhost:3000","http://localhost:3001"],
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.static("uploads"));  //serve static files publicly




// ROUTES
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/likes', likeRoutes);
app.use('/api/relationships', relationshipsRoutes);
app.use('/api/upload', uploadRoute);


app.listen(PORT, ()=> {
    console.log(`Server running in PORT: ${PORT}`);
})