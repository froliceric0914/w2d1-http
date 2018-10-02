var getHTML1 = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function reversed (html) {
 var splitString = html.split("");
 var reverseString = splitString.reverse();
 var joinString = reverseString.join("");
 console.log(joinString)


  // var reverse = reverse(html)
  // console.log(reverse);
}

getHTML1(requestOptions, reversed)
