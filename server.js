const express = require ('express');
// const parser = require('body-parser');
const cors = require('cors');
var proxy = require('http-proxy-middleware');


let port = 3000;

let app = express();

// app.use(parser.json());
app.use(express.static('public'));
app.use(cors());

app.use(proxy('/api/restaurant', {target: 'http://localhost:3001/'}));
app.use(proxy('/restaurantid', {target: 'http://ec2-52-53-155-238.us-west-1.compute.amazonaws.com:3004/'}));
app.use(proxy('/restaurant', {target: 'http://localhost:3002'}));

app.listen(port, () => {
  console.log('Port 3000 is listening');
});


