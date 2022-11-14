const loader = async(socket, userIp, userValues, userKey, googleListVM, usersOnQueue) => {
    console.log('Criando VM GOOGLE');
    googleListVM.forEach(async (vm, key) => {
        if (vm.status === 'available' && vm.userEmail != userValues.userEmail) {

            usersOnQueue.splice(userKey, 1);

            vm.status = 'unavailable';
            vm.userEmail = userValues.userEmail;
            vm.userUsername = userValues.userUsername;
            vm.userIp = userIp;

            console.log('VM created');
            
            socket.emit('vmCreator', {
                status: vm.status, 
                userEmail: vm.userEmail, 
                userUsername: vm.userUsername,
                userIp: userIp,
                connection: {
                    ip: vm.connection.ip,
                    port: vm.connection.port,
                    password: vm.connection.password
                }
            });
        }
    })
}

module.exports = { loader };