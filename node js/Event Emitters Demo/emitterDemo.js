// importing even emitter
const Eventemitter = require("events")

// creating an instance 
const emitter = new Eventemitter();


// event listener
emitter.on("greet",(arg)=>{
    console.log(`hello, i'm ${arg.name} from ${arg.country}...`);
})

// trigger the event

// emitter.emit("greet");

// emitter.emit("greet","Harshrajsinh Gohil")


emitter.emit("greet",{name:"Harshrajsinh Gohil",country:"India"})