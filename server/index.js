const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const corsOptions = {
    origin:'*',
    Credentials:true,
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use('/', router)

const port =5000;

const server = app.listen(port, () => {
    console.log(`running on ${port}`)
})