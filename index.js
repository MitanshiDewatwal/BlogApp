const express = require ('express')
const app = express();
require('./models/config')

const dotenv = require('dotenv')
dotenv.config()
const bodyparser = require('body-parser')
const router = require('./routes/commonRoutes')

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use("/",router)
const server = app.listen(process.env.port, function (req, res) {
    console.log(`server is running on port : ${process.env.port}`);
})

module.exports = server
