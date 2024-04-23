let express = require("express");
let path = require("path");

let currentDirectory=__dirname;
let rootFolder="webroot";


let staticDirectory=path.join(currentDirectory,rootFolder);


let app=express();

app.use(express.static(staticDirectory));

let ipserver="0.0.0.0";

let port=3000;

let server=app.listen(port,ipserver,function(){
    console.log("The server is up and running");
});