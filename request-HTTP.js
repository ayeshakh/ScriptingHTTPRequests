var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err;
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Code: ', response.statusCode);
         console.log("Response Message:", response.statusMessage);
         console.log("Content Type:", response.headers['content-type'])
         console.log("Download Complete");

       })

       .pipe(fs.createWriteStream('./future.jpg'));
       console.log("Downloading Image.....");
