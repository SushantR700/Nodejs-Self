const fs = require("fs");

// fs.writeFileSync("./test.txt", "Hello I created a new file and wrote this..");

fs.readFile("./test.txt", "utf-8", (err, data) => {
    if(err){
        console.log("Error: ", err);
    }else{
        console.log(data);
    }
})


// async function expects a callback to be passed


fs.appendFileSync("./test.txt", "\n Hey I appended something see!!")

