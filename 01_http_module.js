const {readFileSync} = require('fs');
const http = require('http');

const homePage = readFileSync('./navbar-app/index.html')
const style = readFileSync('./navbar-app/styles.css')
const browserApp = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        console.log(req.url)
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    }
    else if (req.url === '/about') {
        console.log(req.url)
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('About Page')
        res.end()
    }
    else if (req.url === '/styles.css') {
        console.log(req.url)
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(style)
        res.end()
    }
    else if (req.url === '/browser-app.js') {
        console.log(req.url)
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(browserApp)
        res.end()
    }
    else {
        console.log(req.url)
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('Page not found')
        res.end()
    }
})
server.listen(3000, ()=>console.log('Server starting on 3000 port'))