//Завдання 1

/*const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const username = os.userInfo().username;
  const osType = os.type();
  const uptimeInMinutes = Math.floor(os.uptime() / 60);
  const currentDirectory = process.cwd();
  const serverFilename = path.basename(__filename);

  const html = `
    <html>
    <head>
      <title>System Information</title>
    </head>
    <body>
      <h1>System Information Done!!!</h1>
      <p>Username: ${username}</p>
      <p>Operating System: ${osType}</p>
      <p>Uptime: ${uptimeInMinutes} minutes</p>
      <p>Current Directory: ${currentDirectory}</p>
      <p>Server Filename: ${serverFilename}</p>
    </body>
    </html>
  `;

  res.end(html);
});

server.listen(5000, 'localhost', () => {
  console.log('Server is running on port:5000');
});*/


//Завдання 2

/*const http = require('http');
const personalModule = require('./personalmodule');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  const username = 'Дмитро'; 
  const greeting = personalModule.greetUser(username);
  const { date, time, timeZone } = personalModule.getCurrentDateTime();

  const html = `
    <html>
    <head>
      <title>Greetings</title>
    </head>
    <body>
      <h1>Greetings</h1>
      <p>${greeting}</p>
      <p>Current Date: ${date}</p>
      <p>Current Time: ${time}</p>
      <p>Time Zone: ${timeZone}</p>
    </body>
    </html>
  `;

  res.end(html);
});

server.listen(5000, 'localhost', () => {
  console.log('Server is running on http://localhost:5000');
});*/