const superagent = require('superagent');
let env = require('./env')

//get a list of property shares
getPropertyShares= async () => {
    try {

        var res = await superagent.get(env.API_URL + 'property-shares/').query({
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
        //console.log(resultsArray)
        console.log('Built property shares array with ' + resultsArray.length + ' property shares');
        return resultsArray;
    } catch (err) {
        console.log('Error getting property shares:')
        console.error(err)
    }   
}


//get a list of shares
getInvestors = async () => {
    try {

        var res = await superagent.get(env.API_URL + 'investors/').query({
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
        //console.log(resultsArray)
        console.log('Built investors array with ' + resultsArray.length + ' investors');
        return resultsArray;
    } catch (err) {
        console.log('Error getting investors:')
        console.error(err)
    }   
}

//get a list of properties
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
        //console.log(resultsArray)
        console.log('Built properties array with ' + resultsArray.length + ' properties');
        return resultsArray;
    } catch (err) {
        console.log('Error getting properties:')
        console.error(err)
    }
}

//get property rentals

getPropertyRentals = async () => {
    try {
        var res = await superagent.get(env.API_URL + 'property-rentals/').query({
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
        console.log(resultsArray[0].renters)
        console.log('Built property rentals array with ' + resultsArray.length + ' property rentals');
        return resultsArray;

    } catch (err) {
        console.log('Error getting property rentals:')
        console.error(err)  
    }
}

module.exports = async () => {
	let properties = [];
    let investors = [];
    let propertyshares = [];
    let propertyrentals = [];
    propertyshares = await getPropertyShares();
	properties = await getProperties();
    investors = await getInvestors();
    propertyrentals = await getPropertyRentals();
	//console.log(properties)
	return {
		propertiesArray:properties,
        investorsArray:investors,
        propertySharesArray:propertyshares,
        propertyRentalsArray:propertyrentals
	}

}