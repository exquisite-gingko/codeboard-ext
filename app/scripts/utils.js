var HttpClient = function() {
  this.get = function(url, cb) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() { 
      if (httpRequest.readyState == 4 && httpRequest.status == 200)
        cb(null, httpRequest.responseText);
      }
    httpRequest.open( "GET", url, true );            
    httpRequest.send( null );
  }
};
