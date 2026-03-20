import http from 'http';
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = process.env.PORT || 3000;

//Get current file path
const __filename=url.fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

console.log(__filename,__dirname);

// making async for the reading the files..
const routes = http.createServer(async (req, res) => {
    let filePath;
    if (req.url === "/") {
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.end('<h1>Welcome to routes files</h1>');

        // now  we are trying to load the html file from public
        filePath=path.join(__dirname,"public","Home.html");


    }

    else if (req.url === "/about") {
        /*const data = [
            { id: 1, lang: 'c', price: 9089 },
            { id: 2, lang: 'java', price: 7890 },
            { id: 3, lang: 'c++', price: 190089 },
            { id: 4, lang: 'javascript', price: 18349 }
        ];

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(data));*/

        // here we are loading the about page from the public folder using the fs moudle

        filePath=path.join(__dirname,"public","about.html");
    }

    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "Data Not Found" }));
    }
    const data=await fs.readFile(filePath);
    res.setHeader("Content-Type","text/html");
    res.write(data);
    res.end();

});

routes.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});