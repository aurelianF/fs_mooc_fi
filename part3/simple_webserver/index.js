// const express = require('express')
// const app = express()

// const cors_var = require('cors')
// app.use(cors_var()); 
// app.options('*', cors_var()); // this enables preflight

// app.use(express.static('build'))

const express = require('express')
const app = express()
const cors = require('cors')


const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
  }
  
  const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }

app.use(cors())
app.use(express.json())
app.use(requestLogger)
app.use(express.static('build'))

let notes = [
    {
        id: 1,
        content: "HTML is easy, indeed",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only JavaScript",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true
    },
    {
        id: 4,
        content: "Test note 4",
        important: true
    }
]
// app.use(express.json())

// app.post('/api/notes', (request, response) => {
//     const note = request.body
//     console.log("Post handler called", note);
//     console.log(note)
//     console.log(request.get('Content-Type'))
//     console.log(request.headers)
//     response.json(note)
//   })
const generateId = () => {
    const maxId = notes.length > 0
        ? Math.max(...notes.map(n => n.id))
        : 0
    return maxId + 1
}
app.get('/cors', (req, res) => {
    console.log("path hanler to /cors has been called");
    res.set('Access-Control-Allow-Origin', '*');
    res.send({ "msg": "This has CORS enabled 🎈" })
})
app.post('/api/notes', (request, response) => {


    const body = request.body

    if (!body.content) {
        return response.status(400).json({
            error: 'content missing'
        })
    }
    response.set('Access-Control-Allow-Origin', '*');
    const note = {
        content: body.content,
        important: body.important || false,
        id: generateId(),
    }

    notes = notes.concat(note)

    response.json(note)
})

app.get('/', (request, response) => {
    response.send('<h1>Buna, draga mea!</h1>')
})
app.put('/api/notes/:id', (request, response) => {

    const body = request.body

    console.log("put handler called 3");
    if (!body.content) {
        return response.status(400).json({
            error: 'content missing'
        })
    }
    response.set('Access-Control-Allow-Origin', '*');
    // const note = notes.find(n=>n.id === body.id);
    objIndex = notes.findIndex(n => n.id === body.id)
    notes[objIndex].important = !notes[objIndex].important;
    response.json(notes[objIndex])
})

app.get('/api/notes', (request, response) => {
    console.log("path hanler to /api/notes has been called");
    response.set('Access-Control-Allow-Origin', '*');
    response.json(notes)
})
app.get('/api/notes/:id', (request, response) => {
    const id = Number.parseInt(request.params.id)

    const note = notes[id];//.find(note => note.id === id)
    // const note = notes.find(note => note.id == id)
    response.set('Access-Control-Allow-Origin', '*');
    // response.json(note)
    if (note) {
        response.json(note)
    } else {
        response.statusMessage = "Status message: id not found";
        response.status(404).end()
    }
})
app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
    console.log("id", id);
    response.status(204).end()
})

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

// app.use(cors_var);

// const http = require('http');
// const express = require('express')




// const app = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': "application/json" })
//     // response.end('Hello World')
//     response.end(JSON.stringify(notes));
// }
// )

// const port = 3001;
// app.listen(port);

// console.log("Hello world simple web server! \n Server listening on port " + port);