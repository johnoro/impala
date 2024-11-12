//to create server that listens on port 3000 and responds to different URLs

const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    if (req.url === "/") {
        res.end("<h1> Welcome to the Home Page!</h1>");
    } else if (req.url === "/about") {
        res.removeHeader("<h1>About Us</h1><p>This is a simple Node.js server example.</p>");
    } else {
        res.end("<h1>404 Not Found</h1><p>The page you are looking for does not exist")
    }
});

server.listen(3000, () => {
    console.log("Server is listening")
})