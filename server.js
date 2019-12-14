const express = require ('express');
// const parser = require('body-parser');
const cors = require('cors');
var proxy = require('http-proxy-middleware');


let port = 3000;

let app = express();

// app.use(parser.json());
app.use(express.static('public'));
app.use(cors());

app.use(proxy('/api/restaurant', {target: 'http://ec2-18-144-27-107.us-west-1.compute.amazonaws.com:3001/'}));
app.use(proxy('/restaurantid', {target: 'http://ec2-54-193-61-50.us-west-1.compute.amazonaws.com:3004/'}));
app.use(proxy('/restaurant', {target: 'http://ec2-18-144-27-107.us-west-1.compute.amazonaws.com:3002/'}));
app.use(proxy('/api/dinner', {target: 'http://ec2-18-144-27-107.us-west-1.compute.amazonaws.com:3003/'}));
app.use(proxy('/api/wine', {target: 'http://ec2-18-144-27-107.us-west-1.compute.amazonaws.com:3003/'}));


app.listen(port, () => {
  console.log('Port 3000 is listening');
});


