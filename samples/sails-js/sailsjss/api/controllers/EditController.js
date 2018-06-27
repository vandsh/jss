/**
 * EditController
 *
 * @description :: Server-side logic for managing edits
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	id: function(req, res){
        var itemId = req.params.id;
        SitecoreDataProvider.getItemData(itemId,"en").then(function (data){
				return res.view({model: data});
		}).catch(function(e) {
            sails.log.error("ViewController::id>>", e)   
        });
    },
};

