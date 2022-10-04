
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const server = require('express')();
const routes = require('./routes');
const port = process.env.PORT;

mongoose.connect(process.env.MONGO_DB_STRING);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});


server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json());
server.use(routes);

server.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}`)
})