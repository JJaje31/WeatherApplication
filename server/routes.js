const express = require('express');
const router = express.Router();
const axios = require('axios')
const path = require('path')
let city;
let state;


router.use(express.static(path.join(__dirname,'../client/public')))

router.get('/',(req,res) =>{
    const htmlPage = path.join(__dirname,'../client/public/index.html')
    res.sendFile(htmlPage)
})
router.get('/temp',(req,res) =>{
    const htmlPage = path.join(__dirname,'../client/public/temperture.html')
    res.sendFile(htmlPage)
})
router.get('/conditions',(req,res) =>{
    const htmlPage = path.join(__dirname,'../client/public/conditions.html')
    res.sendFile(htmlPage)
})
router.get('/api/weather',async(req,res) => {
    try{
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},US&appid=aefc65950d3c13bf8cf329bc985bc698&units=imperial`)
res.json(response.data)} catch(error){
    console.log(error)
}
})

router.post('/search', (req,res) => {
  let data = req.body
  state = data.state
  city = data.city
})

module.exports = router;