/*---------------------
	:: Template 
	-> controller
---------------------*/
var TemplateController = {

  find: function (req, res) {
    var requestedTemplate = req.params.id;

    require('fs').readFile('assets/remoteTemplates/' + requestedTemplate, function (err, contents) {
      if ( err ) {
        console.log(err);
        res.contentType('text/html');
        res.send('')
      } else {
        res.contentType('text/html');
        res.send(contents)
      };
    });


  }

};
module.exports = TemplateController;