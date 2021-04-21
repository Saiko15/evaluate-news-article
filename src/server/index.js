const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
var cors = require('cors')

const mockAPIResponse = require('./mockAPI.js')

const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1'
const application_key = process.env.API_KEY


const app = express()

const PORT = 8081

app.use(express.static('dist'))


app.use(express.static('dist'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

console.log(__dirname)

app.post('/test', (req, res) => {
    baseUrl.sentiment({
        'url': req.body.text
    }, function(error, response) {
        res.send(response);
    });
});


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

