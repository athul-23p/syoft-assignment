const app = require('./index');
const connect = require('./config/db');
require('dotenv').config();

const PORT = 8080;
app.listen(PORT,() => {
    console.log("Listening on port",PORT);
    connect().then(() => console.log("Connected to mongo"));
})
