// Lab 04: Practice path and os core module 
// 1) Write a Node.js program that prints the directory name, file name, file extension, and full 
// path of the code file. (A) 

const path = require('path');

const { log } = require('console');

console.log(__dirname);
console.log(__filename);


// 2) Create a program that joins "users", "arjun", "documents", "project" into a single path using 
// path.join(). (A) 
console.log(path.basename(__dirname));
console.log(path.basename(__filename));

console.log(path.join("users", "arjun", "documents", "project"));

// 3) Write a program to fix the path="//folder//subfolder////file.txt" using path.normalize() and 
// display the clean normalised path. (A) 

console.log(path.normalize("//folder//subfolder////file.txt"));

// 4) Write a program that checks whether the given path is absolute or relative paths. (A) 

console.log(path.isAbsolute("E:/Stranger.Things.S05.Vol1.1080p.10bit.MoviesMod.kid/1080p 10bit/Stranger.Things.S05E04.Chapter.Four.Sorcerer.1080p.AAC.5.1.H265.Web-Dl.Hindi.English.Msubs.MoviesMod.kids.mkv"));

// 5) Write a Node.js program that uses path.resolve() to convert "folder", "subfolder", "app.js" 
// into an absolute path. Print the final resolved path. (A) 

console.log(path.resolve("folder","subfolder","app.js"));

// 6) Write a program that prints: (A) 
// • Operating system name 
// • Release version 
// • Platform 
// • Architecture 

const os = require('os')

console.log(os.type());
console.log(os.version());
console.log(os.platform());
console.log(os.arch());


// 7) Write a program that prints the total memory and free memory in GB (B)

console.log(os.totalmem());
console.log(os.freemem());

// 8) Write a Node.js program that prints details about the currently logged-in user in operating 
// system. (B) 

console.log(os.userInfo());

// 9) Write a program that prints how long the system has been running (uptime) in seconds and in 
// hours. (B) 

console.log(os.uptime());

// 10) Write a Node.js program that prints: (B) 
// • Number of CPU cores 
// • Model name of each core 
// • Network interface details

console.log(os.cpus());
console.log(os.networkInterfaces());
console.log(os.homedir());


