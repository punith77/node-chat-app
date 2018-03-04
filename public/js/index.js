var socket = io();
socket.on('connect', function(){
  console.log('connected to server');
  socket.emit('createMessage', {
    from:'Punith',
    text:'I like react'
  });
});

socket.on('newMessage', function(message){

  console.log('newMessage', message)
});

socket.on('disconnect', function(){
  console.log('disconnected from the server');
})
