// // // 

// // const fs = require('fs');  

// // fs.readFile('file.txt', 'utf8', (err, data) => {  
// //     if (err) {  
// //         console.error('Error reading file:', err);  
// //         return;  
// //     }  
// //     console.log('File content:', data);  
// // });  

// // console.log('Reading file...');  

// const fs = require('fs');
// fs.readFile('file.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     else {
//         console.log('File content:', data);
//     }
// // });

// // console.log('Reading file complete.');
// const path=require('path');
// console.log(__dirname);


const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Listener for 'greet' event
eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

eventEmitter.emit('greet', 'John');
console.log('Event loop continues...');
