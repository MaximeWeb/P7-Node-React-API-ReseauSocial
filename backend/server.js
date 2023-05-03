const http = require('http');
const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const userRoutes = require ('./routes/user.routes');
const postRoutes = require ('./routes/post.routes')
require('dotenv').config({path: './config/.env'});
require('./config/db');


const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));




app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})


