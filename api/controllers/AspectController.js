/*---------------------
	:: Aspect 
	-> controller
---------------------*/
var AspectController = {

	// To trigger this action locally, visit: `http://localhost:port/aspect/index`
	index: function (req,res) {

		Aspect.findAll(function(err, aspects){
			if (err) return res.send(err, 500);

			res.json(aspects.values);
		});

	},

	// To trigger this action locally, visit: `http://localhost:port/aspect/create`
	create: function (req,res) {

		// This will render the view: c:\Users\John\Documents\My Dropbox\Development\sails\ThaumTool/views/aspect/create.ejs
		res.view();

	},

	// To trigger this action locally, visit: `http://localhost:port/aspect/update`
	update: function (req,res) {

		// This will render the view: c:\Users\John\Documents\My Dropbox\Development\sails\ThaumTool/views/aspect/update.ejs
		res.view();

	},

	// To trigger this action locally, visit: `http://localhost:port/aspect/destroy`
	destroy: function (req,res) {

		// This will render the view: c:\Users\John\Documents\My Dropbox\Development\sails\ThaumTool/views/aspect/destroy.ejs
		res.view();

	}

};
module.exports = AspectController;