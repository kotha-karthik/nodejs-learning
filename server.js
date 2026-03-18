import http from 'http';

// const PORT=8000;// this is hardcoded

// to get the port from the env file 

const PORT=process.env.PORT;
const server=http.createServer((req,res)=>{

    // res.setHeader('Content-Type','text/html');
    // res.statusCode=404;
    // the above two lines can be wrapped into single by using 

    res.writeHead(200,{'content-type':'application/json'});
    res.end(JSON.stringify({message:'Server Error'}));

    // res.write('<h1>Hello world</h1>');
    // res.end("Ending");

    console.log(req.url); // we get the url 
    console.log(req.method);// we get the req method get post or any
});

server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});