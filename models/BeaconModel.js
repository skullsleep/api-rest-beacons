exports = module.exports = function (app, mongoose) {

	var beaconSchema = new mongoose.Schema({
		title: { type: String },
		uuid: { type: Number },
		range: { type: Number },
		poster: { type: String },
		// seasons: 	{ type: Number },
		// genre: 		{
		// 	type: String,
		// 	enum: ['Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Comedy']
		// },
		// summary: 	{ type: String }
	});

	mongoose.model('BeaconModel', beaconSchema);

};
