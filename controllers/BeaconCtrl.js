//File: controllers/tvshows.js
var mongoose = require('mongoose');
var BeaconModel = mongoose.model('BeaconModel');

//GET - Return all tvshows in the DB
exports.findAllBeacons = function (req, res) {
	BeaconModel.find(function (err, response) {
		if (err) res.send(500, err.message);

		console.log('GET /beacons')
		res.status(200).jsonp(response);
	});
};

//GET - Return a TVShow with specified ID
exports.findById = function (req, res) {
	BeaconModel.findById(req.params.id, function (err, response) {
		if (err) return res.send(500, err.message);

		console.log('GET /beacons/' + req.params.id);
		res.status(200).jsonp(response);
	});
};

//POST - Insert a new TVShow in the DB
exports.addBeacon = function (req, res) {
	console.log('POST');
	console.log(req.body);

	var tvshow = new BeaconModel({
		title: req.body.title,
		uuid: req.body.year,
		range: req.body.country,
		poster: req.body.poster,
		// seasons: req.body.seasons,
		// genre: req.body.genre,
		// summary: req.body.summary
	});

	tvshow.save(function (err, tvshow) {
		if (err) return res.send(500, err.message);
		res.status(200).jsonp(tvshow);
	});
};

//PUT - Update a register already exists
exports.updateTVShow = function (req, res) {
	BeaconModel.findById(req.params.id, function (err, response) {
		response.title = req.body.petId;
		response.uuid = req.body.year;
		response.range = req.body.country;
		response.poster = req.body.poster;
		// tvshow.seasons = req.body.seasons;
		// tvshow.genre = req.body.genre;
		// tvshow.summary = req.body.summary;

		response.save(function (err) {
			if (err) return res.send(500, err.message);
			res.status(200).jsonp(response);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.deleteTVShow = function (req, res) {
	Beacon.findById(req.params.id, function (err, response) {
		response.remove(function (err) {
			if (err) return res.send(500, err.message);
			res.status(200);
		})
	});
};
