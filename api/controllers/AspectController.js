/*---------------------
	:: Aspect 
	-> controller
---------------------*/
var AspectController = {
	findbyName: function (req, res) {

		var queryName = req.params.id;

		Aspect.findByName(queryName).done(function (err, aspects) {
			if (err) {
				console.log(err);
				return res.send('Not found', 404)
			} else {
				if (typeof(aspects) == "undefined") {
					return res.json([]);
				};
				res.json(aspects.values);
			};

		});
	}
};
module.exports = AspectController;