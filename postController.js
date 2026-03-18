// module js

const posts=[
    {id:1,title:"Post One"},
    {id:2,title:"Post Two"},
    {id:3,title:"Post Three"},
    {id:4,title:"Post Four"},
]

// export const getPost=()=>posts; // for this we need to import in the curly braces..
const getPost= ()=> posts ;

export const getPostLength=()=>posts.length;

export default getPost ; // export one thing as default others as not default.