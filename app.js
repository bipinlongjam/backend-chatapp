
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const PORT = 3000;
const server = http.createServer(app)

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('public'))


    const loginRoutes = require('./routes/login')
    const messageRoutes = require('./routes/message')

app.use(loginRoutes);
app.use(messageRoutes);

app.get('/', (req, res) =>{
    res.send('<h1>Home Page</h1>')
})
// app.get('/login', (req, res) =>{
//     res.sendFile(path.join(__dirname, 'views', 'message.html'))
// })
// // app.get('/login', (req, res) =>{
// //     res.sendFile(path.join(__dirname, 'views', 'login.html'))
// // })
// app.get('/message',(req, res) =>{
//     res.sendFile(path.join(__dirname, 'views', 'message.html'))
// })


server.listen(PORT, ()=>{
    console.log('server started')
})
