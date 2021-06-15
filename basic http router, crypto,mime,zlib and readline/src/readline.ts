import readline from "readline";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

rl.question("node.ts good?",(answer)=>{
    console.log("thank you for your comments",answer)
    rl.close();
})