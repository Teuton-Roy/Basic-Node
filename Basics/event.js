const EventEmitter = require('events');

class Teuton extends EventEmitter {}


    const teuton = new Teuton();

    teuton.on('WaterFull', () => {
        console.log('Turn off the motor!');
        setTimeout(() => {
            console.log('Turn on the motor!');
        }, 3000);
});
teuton.emit('WaterFull');
console.log("Motor is running...");
