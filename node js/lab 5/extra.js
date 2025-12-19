const child = require("child_process");
const { stdout, stdin } = require("process");

child.exec("python p1.py",(error,stdout,stdin)=>{
    if (error) {
        console.log(error);
        return;
    }
    if (stdin) {
        console.log(stdin);
        return;
    }
    if (stdout) {
        console.log(stdout);
        return;
    }
})