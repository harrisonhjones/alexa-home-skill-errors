var assert = require('chai').assert;

describe('GenericErrors', function() {
  describe('UnexpectedInformationReceivedError', function () {

    var alexaErrors;
    var errorHandler;

    before(function() {
        alexaErrors = require('.././index');
        errorHandler = new alexaErrors();
    });
    

    it('should return a full error response is parameter is a string', function () {
        var response = errorHandler.UnexpectedInformationReceivedError('test');
        //asert.isObject(response, 'root response is an object');
        assert.equal(response.header.namespace, 'Alexa.ConnectedHome.Control');
        assert.equal(response.header.name, 'UnexpectedInformationReceivedError');
        assert.equal(response.header.payloadVersion, '2');
        assert.equal(response.payload.faultingParameter, 'test');
    });

    it('should return a blank payload.faultingParameter if parameter is anything but a string', function () {
        var response = errorHandler.UnexpectedInformationReceivedError({});
        assert.equal('', response.payload.faultingParameter);
    });

    
  });
});