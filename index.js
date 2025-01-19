import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Derive __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index.ejs", { root: __dirname });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
