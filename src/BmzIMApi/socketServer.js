module.exports = function(server){
    io = require('socket.io').listen(server),

    //server.listen(process.env.OPENSHIFT_NODEJS_PORT || 3000);//publish to openshift
    //console.log('server started on port'+process.env.PORT || 3000);
    //handle the socket
    io.sockets.on('connection', function(socket) {
            console.log('connection');
        //new user login
        socket.on('login', function(userCode) {
            console.log('login',userCode);
            if (global.online_users.get(userCode) != null) {
                socket.emit('nickExisted');
            } else {
                //socket.userIndex = users.length;
                //users.push(userCode);

                socket.userCode = userCode;
                global.online_users.set(userCode,socket);
                socket.emit('loginSuccess');
                //io.sockets.emit('system', userCode, global.online_users.length, 'login');
                console.log('global.online_users',global.online_users);
            };
        });

        //user leaves
        socket.on('disconnect', function() {
            console.log('disconnect',socket.userCode);
            if (socket.userCode != null) {
                //users.splice(socket.userIndex, 1);
                var tosocket = global.online_users.get(socket.userCode)
                if(tosocket != undefined)
                {
                    global.online_users.set(socket.userCode,undefined);
                }
                //users.splice(users.indexOf(socket.userCode), 1);
                //socket.broadcast.emit('system', socket.userCode, users.length, 'logout');
            }
        });

        //new message get
        socket.on('postMsg', function(msg, color) {
            console.log('postMsg',msg);
            var tosocket = global.online_users.get(msg.to)
            console.log('tosocket');
            if(tosocket)
                tosocket.emit('newMsg', msg, color);
        });

        //new image get
        socket.on('img', function(imgData, color) {
            console.log('img',imgData);
            var tosocket = global.online_users.get(imgData.to)
            tosocket.emit('newImg', socket.userCode, imgData, color);
        });
    });
    console.log("websocket server listening ")
}