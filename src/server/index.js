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

app.post('/test', async (req, res) => {
    urlEntry = req.body,url;
    const response = await fetch(`${baseUrl}${API_KEY}&of=json&txt&model=general&lang=en&url=${req.body.url}`)
    console.log('server response', response)
    const data = await response.json();
    console.log('server data', data)
    const ServerData = {
        score_tag = data.score_tag,
        confidence = data.confidence,
        irony = data.irony,
        subjectivity = data.subjectivity,
        agreement = data.agreement

    } 
    res.send(ServerData)
    console.log(ServerData)
      
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

