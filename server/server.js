const express = require(`express`);
const app = express();
const cors = require(`cors`);
require(`dotenv`).config({ path: `./config.env`});


const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const contactRoutes = require('./routes/contactRoute');
app.use('/', contactRoutes);

// DATABASE CONNECTION
const dbo = require(`./database/conn`);
app.listen(port, () => {
    dbo.connectToServer(function (err) {
        if(err) console.error(err);
    });
    console.log(`Server is running on port: ${port}!`);
});

