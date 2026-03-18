import http from 'http';

const PORT = process.env.PORT || 3000;

const routes = http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to routes files</h1>');
    }

    else if (req.url === "/about") {
        const data = [
            { id: 1, lang: 'c', price: 9089 },
            { id: 2, lang: 'java', price: 7890 },
            { id: 3, lang: 'c++', price: 190089 },
            { id: 4, lang: 'javascript', price: 18349 }
        ];

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(data));
    }

    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Data Not Found" }));
    }

});

routes.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});