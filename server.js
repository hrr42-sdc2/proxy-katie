const express = require ('express');
const parser = require('body-parser');
const cors = require('cors');
var proxy = require('http-proxy-middleware');


let port = 3000;

let app = express();

app.use(parser.json());
app.use(express.static('public'));
app.use(cors());

app.use(proxy('/api/restaurant/:id', {target: 'http://localhost:3001/'}));
app.use(proxy('/restaurantid/:id', {target: 'http://localhost:3004/?restaurantid=1'}));
app.use(proxy('/restaurant/:restaurantId', {target: 'http://localhost:3002'}));

// app.get('/api/restaurant/:id', (req, res) => {
//   res.redirect(`http://localhost:3001/api/restaurant/${req.params.id}`);
// });

// app.get('/restaurantid/:id', (req, res) => {
//   res.redirect(`http://localhost:3004/restaurantid/${req.params.id}`);
// });

// app.get('/restaurant/:restaurantId', (req, res) => {
//   res.redirect(`http://localhost:3002/restaurant/${req.params.id}`);
// });

app.listen(port, () => {
  console.log('Port 3000 is listening');
});


