const Scrum = require('../../models/Scrum');
const ScrumItem = require('../../models/ScrumItem');


const ScrumController = {
	async getScrumDetails(req, res, next){
		const allScrums = await Scrum.find({});
		res.status(200).json({
			message: 'Scrum Details Fetched Succesfully',
			data: allScrums,
		});
	},
	async createNewScum(req, res, next){
		const body = req.body;
		let date = body.date;
		let scrum = new Scrum({
			date:date
		});
		try{
			await scrum.save();
			res.status(200).json({
				message: 'new scrum created',
			});
		}
		catch(err){
			throw err;
		}
	},
	async addScrumItem(req,res,next){
		const body = req.body;
		const scrumItem = new ScrumItem({
			author:body.author,
			tags:body.tags,
			content:body.content,
			links:body.links
		});
		try{
			await scrumItem.save();
			res.status(200).json({
				message:'new item added'
			});
		}
		catch(err){
			throw err;
		}
	},


};

module.exports = ScrumController;
