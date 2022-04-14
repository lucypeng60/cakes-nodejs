const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const client = await mongoose.connect(process.env.DB, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDB;
