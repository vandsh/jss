/**
 * Sitecore Data Provider service
 *
 * @description :: Server-side logic for managing edits
 * @help        :: See https://sailsjs.com/documentation/concepts/services
 */
var sitecoreJss = require('@sitecore-jss/sitecore-jss');

module.exports = {
    getFetchOptions: function(language, options){
        var params = options.params || {};
        if (!!language) {
            params.sc_lang = language;
        }
        params.sc_apikey = sails.config.apiKey;
        var host = sails.config.apiHost;
        return { host: host, params, options };
    },
    getRouteData: function(route, language, options) {
        sails.log.debug("SitecoreDataProvider::getRouteData");
        if(!options) {options = {}}
        const fetchOptions = this.getFetchOptions(language, options);
        var retVal =  sitecoreJss.dataApi.fetchRouteData(route, fetchOptions);
        return retVal;
    },

    getPlaceholderData: function(placeholderName, route, language, options) {
        sails.log.debug("SitecoreDataProvider::getPlaceholderData");
        if(!options) {options = {}}
        const fetchOptions = this.getFetchOptions(language, options);
        var retVal =  sitecoreJss.dataApi.fetchPlaceholderData(placeholderName, route, fetchOptions);
        return retVal;
    },

    getItemData: function(itemPath, language, options) {
        sails.log.debug("SitecoreDataProvider::getItemData");
        if(!options) {options = {}}
        const fetchOptions = this.getFetchOptions(language, options);
        var retVal = sitecoreJss.dataApi.fetchItemData(itemPath, fetchOptions);
        return retVal;
    }
};
