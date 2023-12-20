import Express  from "express";
const app = Express();

const PORT = 8800;



app.listen(PORT, ()=> {
    console.log(`Server running in PORT: ${PORT}`);
})