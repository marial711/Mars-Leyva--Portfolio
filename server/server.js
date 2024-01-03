const express = require(`express`);
const app = express();
const cors = require(`cors`);
require(`dotenv`).config({ path: `./config.env`});

const port = process.env.PORT || 8000;
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use("/", router);

// DATABASE CONNECTION
const dbo = require(`./database/conn`);
app.listen(port, () => {
    dbo.connectToServer(function (err) {
        if(err) console.error(err);
    });
    console.log(`Server is running on port: ${port}!`);
});

// EMAIL CONNECTION
const nodemailer = require("nodemailer");
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Ready to Send");
    }
});