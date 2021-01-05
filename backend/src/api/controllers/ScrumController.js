const ScrumController = {
	getScrumDetails(req, res, next) {
		res.status(200).json({
			message: 'Scrum Details Fetched Succesfully',
			data: { scrumName: 'xyz' },
		});
	},
};

module.exports = ScrumController;
