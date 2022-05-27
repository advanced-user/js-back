const http = require('http')

let requestCounter = 0

const server = http.createServer((request, response) => {
    if (request.url === '/favicon.ico'){
        response.writeHead(200, {'Content-Type': 'image/x-icon'})
        response.end()
        return
    }

    requestCounter++
    response.write(requestCounter.toString())

    switch (request.url) {
        case '/students':
            response.write('STUDENTS')
            break
        case '/':
        case '/courses':
            response.write('FRONT + BACK')
            break
        default:
            response.write('404 not found')
    }
    response.end()
})

server.listen(3003)