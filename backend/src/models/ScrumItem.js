const mongoose = require('mongoose');

const ScrumItemSchema = new mongoose.Schema({
	author: { type: String, required: true },
	tags: { type: [String] },
	content: { type: String, required: true },
	links: { type: [mongoose.Schema.Types.Mixed] },
});

const ScrumItem = mongoose.model('ScrumItem', ScrumItemSchema);
module.exports = ScrumItem;
