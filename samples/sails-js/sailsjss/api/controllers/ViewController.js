/**
 * ViewController
 *
 * @description :: Server-side logic for managing views
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
    path: function(req, res){
        var itemPath = req.params[0];
        if(!itemPath){ itemPath = "/";}
        SitecoreDataProvider.getRouteData(itemPath,"en").then(function (data){
				return res.view({model: data});
		}).catch(function(e) {
            sails.log.error("ViewController::path>>", e)   
        });
    },
    placeholder: function(req, res){
        var itemPath = req.params[0];
        if(!itemPath){ itemPath = "/";}
        SitecoreDataProvider.getPlaceholderData("Header", itemPath,"en").then(function (data){
				return res.view({model: data});
		}).catch(function(e) {
            sails.log.error("ViewController::path>>", e)   
        });
    }
};

