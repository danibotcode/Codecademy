const xhr = new XMLHttpRequest;
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});

xhr.responseType = 'json';

//contains event handler that will be called when xhr's state changes
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;

    }
}

//create a new request
xhr.open('POST', url);
//send request to the server
xhr.send(data);
