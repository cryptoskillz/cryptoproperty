 const api = require('./_src/_data/api');


 module.exports = function (eleventyConfig) {
 	eleventyConfig.addPassthroughCopy({
    	"_src/www/assets": "/www/assets"
  	});
 }