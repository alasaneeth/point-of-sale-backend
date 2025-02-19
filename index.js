import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";

// Load environment variables from a .env file into process.env
dotenv.config();

const app = express();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: "auto"
    }
}));

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));

app.use(express.json());

app.listen(process.env.APP_PORT, () => {
    console.log("Server up and running...");
});
