var getHTML1 = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printLowerCase (html) {
  var lowercase = html.toLowerCase()
  console.log(lowercase);
}

getHTML1(requestOptions, printLowerCase)