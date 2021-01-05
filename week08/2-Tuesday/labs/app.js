//Must restart server anytime changes are made in node.js
const http = require('http');
    // console.log(http);
const someName = require('./js/sample');
console.log(lastName); //var from sample.js

const server = http.createServer((req, res) => {
    // about us
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    switch(req.url){
        case '/':
            res.setHeader('Content-Type', 'text/html');
            res.end(`<h1>Foo</h1>`)
            break;

        case'/about':
        res.setHeader('Content-Type', 'text/html');
            res.end(`<h1>Bar</h1>`)
            break;

        default:
            res.setHeader('Content-Type', 'text/html');
            res.end("You've reached a page that does not exist.")
            break;

        case `/data`:
            res.setHeader('Content-Type', 'application/json')
            
            let students = [{firstName: "Matt", lastName: "Phillips"},{firstName: "John", lastName: "Doe"}];
            let studentsStr = JSON.stringify(students);

            res.end(studentsStr);

        
    }
});

server.listen(3000, () => {

    console.log('running on port 3000');
})



