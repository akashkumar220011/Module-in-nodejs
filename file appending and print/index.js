// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  //  Write your code here
  if(req.method == 'POST'){
    
    let body = '';
    //read request 
    req.on('data', (chunk)=>{
      body+= chunk.toString();
    });
    // handle the end of the request
    req.on('end', ()=>{
      // append the request body to 'data.txt'
      fs.appendFileSync('data.txt', body);
      const newContent = fs.readFileSync('data.txt','utf-8');
      console.log('New content of data.txt:', newContent);
    })

  }
  res.end("data received");
});

export default server;
