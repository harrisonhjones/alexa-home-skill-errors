module.exports = function() {
    this.UnexpectedInformationReceivedError = function(error) {
        var uuid = require('uuid');
        
        var response = {};
        response.header = {};
        response.header.namespace = 'Alexa.ConnectedHome.Control';
        response.header.name = 'UnexpectedInformationReceivedError';
        response.header.payloadVersion = '2';
        response.header.messageId = uuid.v4();
        response.payload = {};

        if(typeof error !== 'string')
            response.payload.faultingParameter = '';
        else
            response.payload.faultingParameter = error;

        return response;
    }
}