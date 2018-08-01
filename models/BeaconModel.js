
exports = module.exports = function (app, mongoose) {

	var beaconSchema = new mongoose.Schema({
		name: { type: String },
		id: { type: Number },
		address: { type: String },
		message: { type: String }
	});

	mongoose.model('BCModel', beaconSchema);

};