var https = require('https');

function getHTML (options, callback) {

  var buff = '';
    /* Add your code here */
  //append each chunk of data to a variable as it is received
  //then console.log the data once all of the data has been received.

  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      // buff = data;
      // data += buff;
      buff += data;
      // console.log('Chunk Received. :', data)
    });

    response.on('end', function() {
      callback(buff)
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)

// getHTML(requestOptions, console.log)



