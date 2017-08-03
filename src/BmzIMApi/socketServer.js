module.exports = function(app){
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),

    //server.listen(process.env.OPENSHIFT_NODEJS_PORT || 3000);//publish to openshift
    //console.log('server started on port'+process.env.PORT || 3000);
    //handle the socket
    io.sockets.on('connection', function(socket) {
            console.log('connection');
        //new user login
        socket.on('login', function(nickname) {
            console.log('login',nickname);
            if (users.indexOf(nickname) > -1) {
                socket.emit('nickExisted');
            } else {
                //socket.userIndex = users.length;
                //users.push(nickname);

                socket.nickname = nickname;
                global.online_users.set(nickname,socket);
                socket.emit('loginSuccess');
                io.sockets.emit('system', nickname, users.length, 'login');
            };
        });

        //user leaves
        socket.on('disconnect', function() {
            console.log('disconnect',socket.nickname);
            if (socket.nickname != null) {
                //users.splice(socket.userIndex, 1);
                var tosocket = global.online_users.get(socket.nickname)
                if(tosocket != undefined)
                {
                    global.online_users.set(socket.nickname,undefined);
                }
                //users.splice(users.indexOf(socket.nickname), 1);
                //socket.broadcast.emit('system', socket.nickname, users.length, 'logout');
            }
        });

        //new message get
        socket.on('postMsg', function(msg, color) {
            console.log('postMsg',msg);
            var tosocket = global.online_users.get(msg.to)
            tosocket.emit('newMsg', socket.nickname, msg, color);
        });

        //new image get
        socket.on('img', function(imgData, color) {
            console.log('img',imgData);
            var tosocket = global.online_users.get(imgData.to)
            tosocket.emit('newImg', socket.nickname, imgData, color);
        });
    });
}