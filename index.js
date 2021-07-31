const express = require('express')
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const twit = require('twit');
const T = new twit({
    consumer_key: '5BNE2jDmesrRssUf8Pw1knfSJ'
    , consumer_secret: 'JU8cL0IaGVQqxONO9StT7MAx4sHMaKgQFaRiJFjGYhoKaDmVG1'
    , access_token: '1021875679535611904-O8YRvgIkCg9OvW9LTCYCeiZNGIgwlA'
    , access_token_secret: 'i7iBh0nZudlwoTNqNKK1VSIMWFuiXo5T7AlfNOrnZ7MP4'
    , timeout_ms: 60 * 1000,
})
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.get('/tweets/:search', function (req, res) {
    T.get('search/tweets', {
        q: req.params.search
        , count: 5
    }, function (err, data, response) {
        res.json(data);
    })
})
app.post('/comment/', function (req, res) {
    console.log(req.body.comment);
    T.post('statuses/update', {
        status: req.body.comment
    }, function (err, data, response) {
        res.json(data)
    })
})
app.listen(3001)


/*

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: false
  }));

*/