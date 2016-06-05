var alexaErrors = require('.././index');

var errorHandler = new alexaErrors();

console.log(errorHandler.UnexpectedInformationReceivedError('test'));