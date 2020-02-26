let doFinalReminder = () => {
    alert('final');
}

//call strpi and update the remninder
let doReminder = (type=1,apiUrl ="",params=0,callback="") => {
    //check if there is a URL
	if (apiUrl!="")
	{  

        let payLoad = {}
        if (params != 0)
        {
            //build the payload
            //note: this payload code limits us in the scope the reusability of this function, let us fix this at a point in the future
            if (params == 1)
                //do payment request
                payLoad = {reminder:'once'}
             if (params == 2)
                //do the first reminder
                payLoad = {reminder:'twice'}        
            if (params == 3)
                //do the second reminder
                payLoad = {reminder:'third'}     
        }           
        //set the type
		if (type == 0) xhrtype = "POST"
    	if (type == 1) xhrtype = "GET"
        if (type == 2) xhrtype = "PATCH"
        if (type == 3) xhrtype = "PUT"
        //set up the XHR
        let xhr = new XMLHttpRequest();
        xhr.open(xhrtype, apiUrl);
        //debug
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Accept', 'application/json');

        if (payLoad != {}) {
            xhr.send(JSON.stringify(payLoad));
        } else {
            xhr.send();
        }

        xhr.onload = function() {
            if (xhr.status === 200) {
                var result = JSON.parse(xhr.responseText);
                console.log(result);
                if (callback != "") {
                    eval(callback(result, xhr.status));
                } else {
                    /*
                    switch (method) {
                        case "autocomplete":
                            //doLog(result);
                            break;
                        default:
                            // code block
                    }
                    */
                }
            } else if (callback !== "") {
                eval(callback(xhr.responseText, xhr.status));
            }
        };
	}
}
