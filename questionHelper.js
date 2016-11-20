'use strict';
var rp = require('request-promise');
var ENDPOINT = 'https://mysterious-mountain-45455.herokuapp.com/questions';

function questionHelper() {
}

questionHelper.prototype.requestQuestions = function() {
  return this.getQuestions().then(
    function(response) {
      console.log('success - received questions');
      return response.body;
    }
  );
};

questionHelper.prototype.getQuestions = function() {
  var options = {
    method: 'GET',
    uri: ENDPOINT,
    resolveWithFullResponse: true,
    json: true
  };
  return rp(options);
};

module.exports = questionHelper;
