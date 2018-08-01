// var express = require("express"),
//   app = express(),
//   bodyParser = require("body-parser"),
//   methodOverride = require("method-override"),
//   mongoose = require('mongoose');

// // Connection to DB
// var dbOptions = {
//   db: {},
//   server: {
//     poolSize: 10
//   },
//   user: 'admin',
//   pass: 'admin123456'
// };
// var urlDB = 'mongodb://ds263791.mlab.com:63791/heroku_0x8kcw8s';

// mongoose.connect(urlDB, dbOptions).then(function (res) {
//   // if (err) throw err;
//   console.log('Connected to Database');
// }, function (err) {
//   console.log("error to coonect DB: ", err.message);
// }).catch(function (err) {
//   console.log("error to coonect DB: ", err.message);
// });

// // Middlewares
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(methodOverride());

// // Import Models and controllers
// var Models = require('./models/BeaconModel')(app, mongoose);
// var BeaconCtrl = require('./controllers/BeaconCtrl');

// // // Example Route
// // var router = express.Router();
// // router.get('/', function (req, res) {
// //   res.send("Hello world!");
// // });
// // app.use(router);

// // API routes
// var beacons = express.Router();
// console.log("beacons express: ", beacons);

// // beacons.route('/beacons')
// //   .get(BeaconCtrl.findAllBeacons)
// //   .post(BeaconCtrl.addTVShow);

// // beacons.route('/beacons/:id')
// //   .get(BeaconCtrl.findById)
// //   .put(BeaconCtrl.updateTVShow)
// //   .delete(BeaconCtrl.deleteTVShow);

// app.use('/api', beacons);

// // Start server
// // app.listen(3000, function () {
// //   console.log("Node server running on http://localhost:3000");
// // });





var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  mongoose = require('mongoose');

// Connection to DB
var dbOptions = {
  db: {},
  server: {
    poolSize: 10
  },
  user: 'admin',
  pass: 'admin123456'
};
var urlDB = 'mongodb://ds263791.mlab.com:63791/heroku_0x8kcw8s';

mongoose.connect(urlDB, dbOptions).then(function (res) {
  // if (err) throw err;
  console.log('Connected to Database');
}, function (err) {
  console.log("error to coonect DB: ", err.message);
}).catch(function (err) {
  console.log("error to coonect DB: ", err.message);
});


// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var models = require('./models/tvshow')(app, mongoose);
var TVShowCtrl = require('./controllers/tvshows');

// Example Route
var router = express.Router();
router.get('/', function (req, res) {
  res.send("Hello world!");
});
app.use(router);

// API routes
var tvshows = express.Router();

tvshows.route('/tvshows')
  .get(TVShowCtrl.findAllTVShows)
  .post(TVShowCtrl.addTVShow);

tvshows.route('/tvshows/:id')
  .get(TVShowCtrl.findById)
  .put(TVShowCtrl.updateTVShow)
  .delete(TVShowCtrl.deleteTVShow);

app.use('/api', tvshows);

// Start server
app.listen(3000, function () {
  console.log("Node server running on http://localhost:3000");
});