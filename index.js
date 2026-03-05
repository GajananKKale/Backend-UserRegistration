import dotenv from 'dotenv'
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
let app = express()
import { router } from "./routes/routes.js"
import path from "path"
dotenv.config()

let PORT = process.env.port || 8000

let _dirname = path.resolve()

//middleware
app.use(cors({
    // origin: "http://localhost:5173",
    origin: "https://myfreeweb.netlify.app",
    credentials: true
}));

app.use(express.json())

app.use("/api", router)



app.listen(PORT, () => {
    mongoose.connect(process.env.mongo_url).then(() => {
        console.log("connected to Database");
    }).catch((error) => {
        (
            console.log(error)
        )
    })
    console.log(`server is running on port : ${PORT}`);
})
