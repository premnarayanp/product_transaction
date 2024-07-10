import dotenv from "dotenv";
import express from "express";
import cors from 'cors'
dotenv.config();

//import productRouter from "./src/features/product.js";
const app = express();

app.use(cors());

// use post request  url
app.use(express.urlencoded());

//for json req/res
app.use(express.json());

//app.use("/api", productRouter);

export default app;