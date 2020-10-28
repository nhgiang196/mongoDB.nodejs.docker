const express = require('express');
const key = require('./config/main');
const bodyParser = require('body-parser')
const ConnectDB = require('./config/db')
const { port, mongoURL } = key;
var routes = require('./config/routes');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server runing in port ${port}`);
    ConnectDB(mongoURL);
})
