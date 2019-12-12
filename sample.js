var AWS = require('aws-sdk');
var uuid = require('uuid');
var fs = require('file-system');

// Create unique bucket name
var bucketName = 'hrr42-fec1.' + 's3.us-west-1.amazonaws.com';
// Create name for uploaded object key
var keyName = 'imageCarouselTop.js';

const fileContent = fs.readFileSync('./bundle.js');

var objectParams = {Bucket: bucketName, Key: keyName, Body: fileContent};
var s3 = new AWS.S3({apiVersion: '2006-03-01', region: 'us-west-1'});

s3.upload(objectParams, function(err, data) {
  if (err) {
    throw err;
  }
  console.log(`File uploaded successfully. ${data.Location}`);
});

/*

// Create a promise on S3 service object
var bucketPromise = new AWS.S3({apiVersion: '2006-03-01', region: 'us-west-1'}).createBucket({Bucket: bucketName}).promise();

Handle promise fulfilled/rejected states
bucketPromise.then(
  function(data) {
    // Create params for putObject call
    var objectParams = {Bucket: bucketName, Key: keyName, Body: fileContent};
    // Create object upload promise
    var uploadPromise = new AWS.S3({apiVersion: '2006-03-01', region: 'us-west-1'}).putObject(objectParams).promise();
    uploadPromise.then(
      function(data) {
        console.log('Successfully uploaded data to ' + bucketName + '/' + keyName);
      });
  }).catch(
  function(err) {
    console.error(err, err.stack);
  });
*/