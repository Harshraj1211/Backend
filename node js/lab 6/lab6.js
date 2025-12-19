
// Lab 06: practice fs core module. 

// 1) Write a Node.js program that uses fs.readFile() to read a file named data.txt asynchronously 
// and print its content on the console. (A) 

const { error, log } = require('console');
const fs1 = require('fs')

fs1.readFile('greeting.txt','utf-8',(error,data)=>{
    if (error) {
        console.log(error);
        return;
    }

    console.log(data);
})

// 2) Use fs.readFileSync() to read info.txt and print the content, Compare execution with the 
// asynchronous version. (A) 

const fs2 = require('fs')

const data2 = fs2.readFileSync('greeting.txt','utf-8',(error)=>{
    console.log(error);
})

console.log(data2);


// 3) Create a program that writes the text into a file named output.txt. (A) 

const fs3 = require('fs')

fs3.writeFile('greeting.txt','jay mataji',(error)=>{
    if (error) {
        console.log(error);   
    }
})

// 4) Create a program that appends the text into a file named output.txt. (A) 

const fs4 = require('fs')

fs4.appendFile('greeting.txt','i am harsh.',(error)=>{
    if (error) {
        console.log(error);
        return;
    }
})

// 5) Write a program to delete a file named temp.txt using fs.unlink() and display success or 
// error. (B) 

const fs5 = require('fs')
fs1.unlink('temp.txt',(error)=>{
    if (error) {
        console.log(error);
        return;
    }
    console.log("File is Deleted");
})

// 6) Write a program that creates a folder named my-data using fs.mkdir(). If the folder already 
// exists, show an appropriate message. (B) 

const fs6 = require('fs')

fs6.mkdir('mkdir_folder',(err)=>{
    if (err.code === 'EEXIST') {
        console.log("directory is already directed");
        return;
    }
    if (err) {
        console.log(err);
        return;
    }
    console.log("directory is created.");
    
})

// 7) Write a program to list all files in a folder called documents/ using fs.readdir() and print the 
// file names one by one. (B) 

const { error } = require('console')
const fs7 = require('fs')

fs7.readdir('.',(error,data)=>{
    if (error) {
        console.log(error);
        return;
    }
    console.log(data);
})

// 8) Write a program that copies a file named source.txt to a new file named backup.txt using 
// fs.copyFile(). (C) 

const fs8 = require('fs')

fs8.copyFile('greeting.txt','copy_greeting.txt',(error)=>{
    if (error) {
        console.log(error);
        return;
    }
    console.log('copy');
    
})

// 9) Write a program that checks if the file config.json exists in the current directory using 
// fs.existsSync() and prints the result. (B) 

const { error } = require('console')
const fs9 = require('fs')

const data = fs9.existsSync('greeting.txt',(error)=>{
    if (error) {
        console.log(error);
        return;
    }
})

console.log(data);

// 10) Write a program using fs.watch() to monitor changes in watchme.txt. Whenever file content 
// changes, print: “File Changed” (C)

const fs10 = require('fs')

fs10.watch('.',(eventType,filename)=>{
    if (filename === 'greeting.txt') {
        console.log(`File Changed , eventType :  ${eventType}   || changes in this file :   ${filename}`);
    }
})
