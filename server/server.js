const express = require(`express`);
const app = express();
const cors = require(`cors`);
require(`dotenv`).config({ path: `./config.env`});

const sendMail = require('./routes/contactRoute');

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// DATABASE CONNECTION
const dbo = require(`./database/conn`);
app.listen(port, () => {
    dbo.connectToServer(function (err) {
        if(err) console.error(err);
    });
    console.log(`Server is running on port: ${port}!`);
});

app.post('/contact', (req,res) => {
    sendMail(req,res)
});
app.get('/', (req, res) => {
    res.send(req.body);
});

