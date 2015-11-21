var HttpClient = function() {
  this.get = function(url, cb) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() { 
      if (httpRequest.readyState == 4) {
        var response = readBody(httpRequest);
        cb(null, response);
      }
    };
    httpRequest.open('GET', url, true);            
    httpRequest.send(null);
};

function readBody(xhr) {
  var data;
  if (!xhr.responseType || xhr.responseType === "text") {
    data = xhr.responseText;
  } else if (xhr.responseType === "document") {
    data = xhr.responseXML;
  } else {
    data = xhr.response;
  }
  return data;
};
