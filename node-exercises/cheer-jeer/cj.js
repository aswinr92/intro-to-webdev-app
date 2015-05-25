var express = require('express');

var app = new express();

app.get('/cheer.txt',function(req,res){
  res.end('You are awesome');  
});

app.get('/jeer.txt',function(req,res){
  res.end('What are you doing');  
});

app.listen(8080,function(){
    console.log('Live now!!!!');
});