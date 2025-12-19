
// Lab 05: Practice child_process, url, util and event core module

// 1) Write a Node.js program using child_process.exec() to run the shell command to check the
// current version of node. (A)

const child_process = require('child_process');
const { stdout, stdin, cwd } = require('process');
const { EventEmitter } = require('stream');

const child = child_process.execFile('node',['--version'],(err,stdout,stdin)=>{
    console.log(stdout);
});

child_process.exec('dir',(err,stdout,stdin)=>{
    if (err) {
        console.log(err);
        return;
    }
    if (stdout) {
        console.log(stdout);
        return;
    }
    if (stdin) {
        console.log(stdin);
        return;
    }
})


// 2) Write a program that uses child_process.spawn() to run the command to print files and
// folders of current directory. (B)

// const child1 = child_process.spawn("cmd.exe",["/c","dir","/s","c:\\"]);

// child1.stderr.on("data",(data)=>{
//     console.log(`${data}`);
// })

// child1.stdout.on("data",(data)=>{
//     console.log(`${data}`);
// })

// child1.on("close",(data)=>{
//     console.log(`${data}`);
    
// })

// 3) Write a program to print current working directory using Node.js. (B)

console.log(process.cwd());

// 4) Write a program that parses the given URL, Print protocol, hostname, pathname, and query
// parameters separately. (A)

const url = require('url');
const address = 'https://darshanums.in/Login.aspx';


// 5) Create a new URL object with base, then append pathname and query, also print the final
// URL. (B)
// 6) Create an EventEmitter instance, Register an event "greet" and print a message when
// triggered. Fire that event manually using .emit().(B)