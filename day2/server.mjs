import { createServer } from "node:http";

const host = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello world !!!!");
});

server.listen(port, host, () => {
  console.log("server is running");
});

//  { name: 's', age:33 ,loc:"sss"}  -> loc patch
// only object put


// CRUD   create  Read update delete

// GET   -> Read

// POST  ->  create

// PUT   -> Update

// PATCH  -> update

// DELETE  -> delete

// status code