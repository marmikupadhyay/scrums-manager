const mongoose = require('mongoose');

const ScrumSchema = new mongoose.Schema({
	date: { type: mongoose.Schema.Types.Date, required: true },
	scrumData: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ScrumItem' }],
});

const Scrum = mongoose.model('Scrum', ScrumSchema);
module.exports = Scrum;
