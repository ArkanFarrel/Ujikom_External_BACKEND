import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/route.js";
import "./model/index.js";

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
};

app.use(cors(corsOptions)); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 3008;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
