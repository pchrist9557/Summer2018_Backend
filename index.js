const express = require('express');
const index = express();

index.get('/', function(req,res) {
    res.send('Hello World');

});

//Basic Routes

index.get('/monkeys', function(req,res) {
    res.send("Not your mothers monkey")
});

//Basic Post Routes

index.post('/monkeys', function(req,res) {
    res.send("You cannot post stuff yet")
});

index.get('/hello/world/2', function(req,res) {
    res.send("Another hello world example")
});

//Deep Routes

index.listen(3000, function() {
    console.log("Starting Express on port 3000");
});