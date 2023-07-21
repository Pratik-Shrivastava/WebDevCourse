// _ is used to access last variable
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Lists and Tables</title>
  </head>
  <body>
      <ol type="1">
          <li>Pratik</li>
          <li>Pratik</li>
          <li>Pratik</li>        
      </ol>
      <ul>
          <li>list 1</li>
          <li>list 2</li>
          <li>list 3</li>
          <li>list 4</li>
      </ul>
  
      <h3>HTML table</h3>
      <table>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>ID</th>
                  <th>Role</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <th>Pratik</th>
                  <th>IT2021005</th>
                  <th>CR</th>
                  
              </tr>
              <tr>
                  <th>Sneha</th>
                  <th>IT2021061</th>
                  <th>Student</th>
                  
              </tr>
              <tr>
                  <th>Silky</th>
                  <th>IT2021062</th>
                  <th>Student</th>
                  
              </tr>
          </tbody>
      </table>
      
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});