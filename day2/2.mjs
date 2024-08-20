import { createServer } from "node:http";

const host = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello world");
});

server.listen(port, host, () => {
  console.log("server is running");
});

// 1xx 2xx 3xx 4xx 5xx

// 1 information
// 2 success
// 3 redirection
// 4 client
// 5 servers

const p = {
  name: "sro",
  age: "as",
  loc: "hyd",
};

// url : '/getUserInfo'

// url : '/getAdminInfo'
