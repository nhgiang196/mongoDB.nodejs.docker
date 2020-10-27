const express = require('express');

const key = require('./config/main');

const ConnectDB = require('./config/db')
const { port, mongoURL } = key;

ConnectDB(mongoURL)

const app = express()


console.log`Server test`

app.listen(port, () => console.log(`Server runing in port ${port}`))