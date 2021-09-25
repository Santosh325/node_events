const eventEmitter = require('events');

const event = new eventEmitter();

 
// event.on('hello',() => {
//   console.log("my name is john doe");
// });

// event.on('hello', () => {
//     console.log('my name is santosh')
// })


event.on('checkRequest', (statusCode, statusMsg) => {
    console.log(`checking request ${statusCode} and its ${statusMsg}`)
})
event.emit('checkRequest',200,"ok")