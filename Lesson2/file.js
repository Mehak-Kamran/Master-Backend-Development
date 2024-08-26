//file handling
const fs=require("fs");

//writing a file or creating a file

// fs.writeFile("file.txt","This is file data",function(err){
//     if(err){
//         console.error(err.message);
//     }
//     else{
//         console.log("success");
//     }
// })

//append in file

// fs.appendFile("file.txt","This is appended data ",function(err){
//     if(err){
//         console.error(err.message);
//     }
//     else{
//         console.log("success");
//     }
// })

//copy data
// fs.copyFile("file.txt","./copy/copy.txt",function(err){
//     if(err){
//         console.error(err.message);
//     }
//     else{
//         console.log("success");
//     }
// })

//rename
fs.rename("file.txt","file1.txt",function(err){
    if(err){
        console.error(err.message);
    }
    else{
        console.log("success");
    }
})

//unlink or delete a file (blank/unblank)
// fs.unlink("hello.txt",function(err){
//     if(err){
//         console.error(err.message);
//     }
//     else{
//         console.log("success");
//     }
// })


