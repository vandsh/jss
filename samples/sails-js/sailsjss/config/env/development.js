/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

   //change to https to enable Login functionality
   apiHost: 'http://sc9test',
   layoutServiceRoute: '/sitecore/api/layout/render/jss',
   apiKey: '{2D55AD34-7810-4911-92A6-683F0B76F789}',
   pathRewriteExcludeRoutes: ['/dist', '/assets', '/sitecore/api'],
   debug: false,

};
