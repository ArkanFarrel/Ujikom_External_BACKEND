import "./model/index.js"
import express, { Router } from "express";
// import Property from "./model/propertyModel.js";
// import Transaction from "./model/transaksiModel.js";
// import User from "./model/UserModel.js";
import router from "./routes/route.js";
import bodyParser from "body-parser";
const app = express();
app.use(express.json());
app.use(bodyParser.json())

app.use("/", router)

// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())


app.listen(3009, () => {
    console.log("Server is running on port 3009");
});