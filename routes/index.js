var express = require('express');
var router = express.Router();
var request = require('request')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/get-joke', (req, res, next) => {
  var options = {
    "url": 'https://api.chucknorris.io/jokes/random'
  }
  console.log('res: ', res)
  request(options.url, (err, response) => {
    console.log('second response:  ', response)
    let joke = JSON.parse(response.body)
    console.log('joke:  ', joke)
    res.render('index', {joke: joke.value})
  })
})

module.exports = router;
