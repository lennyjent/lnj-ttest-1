console.log("Hello Lenny");

// https://nodejs.dev/en/learn/reading-files-with-nodejs/

const fs = require('fs');

// let DataSrc = fs.readFile('data.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
//   return data;
// });

let datat = [];
datat = fs.readFile('data.json', 'utf8', (err, data) => {
    console.log(data)   
    // return data;
    datat = data;
    console.log(typeof(datat));

    let dataa = JSON.parse(data);
    console.log(typeof(dataa));

    dataa.forEach(element => {
        console.log("element " + element.name);
    });

     });

     



//let dataArray = JSON.parse(DataSrc);
// console.log(dataArray)