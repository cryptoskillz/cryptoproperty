//call strpi and update the remninder
let doReminder = (type=1,apiUrl ="",callback="") => {
	if (apiUrl!="")
	{
		if (type == 0) xhrtype = "POST"
    	if (type == 1) xhrtype = "GET"
    	if (type == 2) xhrtype = "PATCH"
    	if (xhr.status === 200) {
            var result = JSON.parse(xhr.responseText);
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
	}
}
