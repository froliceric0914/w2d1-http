var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };


    var buff = '';
    /* Add your code here */
  //append each chunk of data to a variable as it is received
  //then console.log the data once all of the data has been received.

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      // buff = data;
      // data += buff;
      buff += data;
      // console.log('Chunk Received. :', data)
    });

    response.on('end', function() {
      console.log('Response stream complete.', buff);
    });
  });

}


// response.setEncoding('utf8');

//   response.on('data', function (data) {
//   // buff = data
//   // data += buff;
//   console.log('Chunk Received. :', data)
//   });

//  response.on('end', function() {
//     console.log('Response stream complete.');
//   });

// };

getAndPrintHTML();

