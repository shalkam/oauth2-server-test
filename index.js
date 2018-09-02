require('dotenv').config();
require('./model/db');
const OAuth2Server = require('oauth2-server');
const qs = require('qs');
const express = require('express');
const bodyParser = require('body-parser');

const oauth = new OAuth2Server({
  model: require('./model')
});

const Request = OAuth2Server.Request;
const Response = OAuth2Server.Response;
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/oauth/token', (req, res) => {
  console.log(Object.keys(req), req.body)
  const request = new Request(req);
  const response = new Response(res);
  oauth
    .token(request,response)
    .then(function(token) {
      // Todo: remove unnecessary values in response
      return res.json(token)
    }).catch(function(err){
      return res.status(500).json(err)
    })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));