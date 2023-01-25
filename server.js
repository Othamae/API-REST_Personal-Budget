require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morganBody = require('morgan-body');
const bodyParser = require('body-parser');
const {dbConnectPostgres} = require('./DB/postgres')
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json())


/**
 * Routes
 */
app.use('/api', require('./Routes'));


/**
 * Connecting to Server
 */
app.listen (port,() =>{
    console.log('Hello Word!')
    console.log(`App ready in: http://localhost:${port}`)
});

/**
 * Connecting Postgres DB
 */
dbConnectPostgres();