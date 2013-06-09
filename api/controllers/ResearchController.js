/*---------------------
	:: Research 
	-> controller
---------------------*/
var ResearchController = {

  findbyName: function (req, res) {

    var queryName = req.params.id;

    var cleanName = queryName.split('_');
    cleanName = cleanName.join(' ');

    Research.findByName(cleanName).done(function (err, researches) {
      if (err) {
        console.log(err);
        return res.send('Not found', 404)
      } else {
        if (typeof(researches) == "undefined") {
          return res.json([]);
        };
        res.json(researches.values);
      };

    });
  }

};
module.exports = ResearchController;