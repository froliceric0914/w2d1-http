var getHTML1 = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printUpperCase (html) {
  var upercase = html.toUpperCase()
  console.log(upercase);
}

getHTML1(requestOptions, printUpperCase)