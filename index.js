import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";


// Derive __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const baseURL = " http://api.weatherapi.com/v1/current.json";
const key = "441f6e2eb66949d9ab0113237251801";


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
let errorPresent = false;

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/city", async (req, res) => {
    try {
        const result = await axios.get(baseURL, {
            params: {
                q: req.body.city,
                key: key,
                aqi: "no"
            }
        });
        res.render("index.ejs", {data: result.data});
        
      } catch (error) {
        let errorMessage = error.response.data.error.message;
        res.render("index.ejs", {error: errorMessage});
        res.status(500);
      }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
