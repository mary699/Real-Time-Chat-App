const express = require('express');
const path = require('path')

const app = express()
const http = require ('http').createServer(app)


app.use(express.static(path.join(__dirname, 'public')))

//1. this comes in after the css and styling has been done
const io =require('socket.io')(http)
io.on('connection', socket=>{
    console.log('Connection Successful')

    socket.on('sendMessage', msg => {
        // console.log(msg)
        socket.broadcast.emit('sendToAll', msg)
    })
})


//2. Search socket.io
//3. Click Learn -> Client API 
//4.Copy  <script src="/socket.io/socket.io.js"></script> and paste to the index.html
//5. regresh browser and confirm the response on the terminal

//Socket.IO enables real-time, bidirectional and event-based communication.
//It works on every platform, browser or device, focusing equally on reliability and speed.
//6. create a app.js and link to index.html


//the end of the comment 



//this helps you craete a port for heroku
const PORT = process.env.PORT || 3000
http.listen(PORT, ()=> {
    console.log('Sever is running on port', PORT)
})



