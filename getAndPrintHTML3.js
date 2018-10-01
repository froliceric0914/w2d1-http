var https = require('https');


function getAndPrintHTML (options) {
//accepts a paramater, "options"

  /* Add your code here */
  // var requestOptions = {
  //   host: 'sytantris.github.io',
  //   path: '/http-examples/step2.html'
  // };

  var htmlResult = '';
  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      // htmlResult = data;
      // data += htmlResult;
      htmlResult += data;
      // console.log('Chunk Received. :', data)
    });

   response.on('end', function() {
      console.log('Response stream complete.', htmlResult);
    });
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getAndPrintHTML(requestOptions)
