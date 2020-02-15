const superagent = require('superagent');
let env = require('./env')

getProperties = async () => {
	try {
        var res = await superagent.get(env.API_URL + 'properties/').query({
        });
        var resultsArray = res.body;
        var hasNextPage = !!(res.body.next)
        var nextPageURL = res.body.next;
        while (hasNextPage) {
            var nextPage = await superagent.get(nextPageURL);
            hasNextPage = !!(nextPage.body.next)
            nextPageURL = nextPage.body.next
            resultsArray = resultsArray.concat(nextPage.body.results)
        }
        console.log('Built properties array with ' + resultsArray.length + ' properties');
        return resultsArray;
    } catch (err) {
        console.log('Error getting properties:')
        console.error(err)
    }
}

module.exports = async () => {
	let properties = [];
	properties = await getProperties();
	console.log(properties)
	return {
		propertiesArray:properties
	}

}