const superagent = require('superagent');

getProperties = async () => {

	console.log(_API_URL);
	return;
	try {
        var res = await superagent.get(env.API_URL + 'users/').query({
            'limit': '100'
        });
        var resultsArray = res.body.results;
        var hasNextPage = !!(res.body.next)
        var nextPageURL = res.body.next;
        while (hasNextPage) {
            var nextPage = await superagent.get(nextPageURL);
            hasNextPage = !!(nextPage.body.next)
            nextPageURL = nextPage.body.next
            resultsArray = resultsArray.concat(nextPage.body.results)
        }
        console.log('Built users array with ' + resultsArray.length + ' users');
        return resultsArray;
    } catch (err) {
        console.log('Error getting users:')
        console.error(err)
    }
}

module.exports = async () => {
	let properties = [];
	return {
		propertiesArray:properties
	}

}