
exports = module.exports = function (app, mongoose) {

	var beaconSchema = new mongoose.Schema({
		name: { type: String },
		uuid: { type: String },
		major: { type: String },
		minor: { type: String },
		address: { type: String },
		message: { type: String }
	});

	mongoose.model('BCModel', beaconSchema);

};