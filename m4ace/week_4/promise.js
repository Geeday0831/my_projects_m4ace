function resolveResponse() {
    console.log("resolvePromise() was called");
    return Promise.resolve({
        status: 200, body: 'success'
    });

    
}
function rejectResponse(){
    return Promise.reject
        (new Error("this api is not working"));
}

function getFullResponseFromAPI(success){
    return success ? rejectResponse() : rejectResponse();
}

getFullResponseFromAPI(true)
    .then(console.log)
    .catch(error => console.error("no error", error.message));


getFullResponseFromAPI(false)
    .then(console.log)
    .catch(error => console.error("caught error", error.message));
/* 
resolveResponse()
.then(console.log); */