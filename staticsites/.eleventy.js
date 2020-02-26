 const api = require('./_src/_data/api');


 module.exports = function (eleventyConfig) {
 	eleventyConfig.addPassthroughCopy({
    	"_src/www/assets": "/www/assets",
    	"_src/reports/assets": "/reports/assets",
    	"_src/reports/.htaccess": "/reports/.htaccess",
    	"_src/reports/.htpasswd": "/reports/.htpasswd"
  	});
 }