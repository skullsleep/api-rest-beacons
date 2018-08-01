//File: controllers/tvshows.js
var mongoose = require('mongoose');
var BCModel = mongoose.model('BCModel');

//GET - Return all tvshows in the DB
exports.findAllItems = function (req, res) {
	BCModel.find(function (err, tvshows) {
		if (err) res.send(500, err.message);

		console.log('GET /tvshows')
		res.status(200).jsonp(tvshows);
	});
};

//GET - Return a TVShow with specified ID
exports.findById = function (req, res) {
	BCModel.findById(req.params.id, function (err, tvshow) {
		if (err) return res.send(500, err.message);

		console.log('GET /tvshow/' + req.params.id);
		res.status(200).jsonp(tvshow);
	});
};

//POST - Insert a new TVShow in the DB
exports.addItem = function (req, res) {
	console.log('POST');
	console.log(req.body);

	var tvshow = new BCModel({
		name: req.body.name,
		id: req.body.id,
		address: req.body.address,
		message: req.body.message
	});

	tvshow.save(function (err, tvshow) {
		if (err) return res.send(500, err.message);
		res.status(200).jsonp(tvshow);
	});
};

//PUT - Update a register already exists
exports.updateItem = function (req, res) {
	BCModel.findById(req.params.id, function (err, tvshow) {
		tvshow.name = req.body.name;
		tvshow.id = req.body.id;
		tvshow.address = req.body.address;
		tvshow.message = req.body.message;

		tvshow.save(function (err) {
			if (err) return res.send(500, err.message);
			res.status(200).jsonp(tvshow);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.deleteItem = function (req, res) {
	BCModel.findById(req.params.id, function (err, tvshow) {
		tvshow.remove(function (err) {
			if (err) return res.send(500, err.message);
			res.status(200);
		})
	});
};