var https = require('https');

module.exports = function getHTML (options, callback) {

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







// getHTML(requestOptions, console.log)



