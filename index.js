const http = require('http');

http
.createServer((req, res)=>{
    res.writeHead(200, {'Content-type' : 'text/html'})
    res.end(`<p>Desafio <b>Latam</b></p>`);
}).listen(3000,()=>{
    console.log('Servidor ON');
})