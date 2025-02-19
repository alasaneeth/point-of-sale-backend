import express from "express"
import cors from "cors"
import  session from "express-session"
import dotenv from "dotenv"


const app = express();

app.use(session({
    secret:process.env.SESS_SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        secure:"auto"
    }

}
))

app.cors(cors({
    credentials:true,
    origin:"htttp://localhost:3000"
}))

app.use(express.json());

app.listen(process.env.APP_PORT, ()=> {
    console.log("server up and running...")
})