 const api = require('./_data/api');


 module.exports = function (eleventyConfig) {
 	eleventyConfig.addPassthroughCopy({
    	"assets": "assets"
  	});
 }