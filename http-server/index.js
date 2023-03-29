const HTTP = require("http");
const FS = require("fs");
const port = require("minimist")(process.argv.slice(2));

let hcontent = "";
let pcontent = "";
let rcontent = "";

FS.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  hcontent = home;
});

FS.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  pcontent = project;
});
FS.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  rcontent = registration;
});

HTTP.createServer((request, response) => {
  let url = request.url;
  response.writeHeader(200, { "Content-Type": "text/html" });
  switch (url) {
    case "/project":
      response.write(pcontent);
      response.end();
      break;
    case "/registration":
      response.write(rcontent);
      response.end();
      break;
    default:
      response.write(hcontent);
      response.end();
      break;
  }
}).listen(port);
