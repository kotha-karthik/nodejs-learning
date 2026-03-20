// implemeting the loggers
import { createServer } from 'http';

const PORT=process.env.PORT;
const users=[
    {"id":1 , name:'karthik'},
    {"id":2 , name:'Jhon'},
    {"id":3 , name:'ram'},
    {"id":4 , name:'gopal'}
]
//loggers
console.log("running..");
const logger=(req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
};

//JSOM middleware
const jsonmiddleware =(req,res,next)=>{
    res.setHeader('Content-Type','application/json');
    next();
}

//Route handler for GET /api/users

const getUsersHandler = (req,res)=>{
    res.write(JSON.stringify(users));
    res.end();
}

// Route handler for GET /api/users/:id

const getUsersByIdHandler=(req,res)=>{
    const id=req.url.split("/")[3];
    const user=users.find((user) => user.id === parseInt(id));
    if(user)
    {
        res.write(JSON.stringify(user));
        res.end();
    }else{
        res.write(JSON.stringify({message:'user not found'}));
        res.end();
    }
}
// routehandle for the post request

const createUserHandler=(req,res)=>{
    let body='';
    // listen for the data
    req.on('data',(chunk)=>{ body+= chunk.toString(); })
    req.on('end',()=>{
        const newUser=JSON.parse(body);
        users.push(newUser);
        res.statusCode=201;
        res.write(JSON.stringify(newUser));
        res.end();
    })
}


// Not found handle for the get api/users/

const notFoundHandler=(req,res)=>{
    res.statusCode=404;
    res.write(JSON.stringify({message:'route not found'}));
    res.end();
}


const server=createServer((req,res)=>{

    logger(req,res,()=>{
        jsonmiddleware(req,res,()=>{
            if(req.url === '/api/users' && req.method==='GET')
            {
                getUsersHandler(req,res);
            }else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method==='GET')
            {
                    getUsersByIdHandler(req,res);
            }
            else if(req.url==='/api/users' && req.method==='POST')
            {
                    createUserHandler(req,res);
            }
                
            else{
                notFoundHandler(req,res);
            }
        });
            
    });
});

server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})