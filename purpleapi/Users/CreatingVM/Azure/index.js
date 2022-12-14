const loader = async(socket, userIp, userValues, userKey, azureListVM, usersOnQueue) => {
    console.log('Criando VM AZURE');
    azureListVM.forEach(async (vm, key) => {
        if (vm.status === 'available' && vm.userEmail != userValues.userEmail) {

            usersOnQueue.splice(userKey, 1);

            vm.status = 'unavailable';
            vm.userEmail = userValues.userEmail;
            vm.userUsername = userValues.userUsername;
            vm.userIp = userIp;
            
            socket.emit('vmCreator', {
                status: vm.status, 
                userEmail: vm.userEmail, 
                userUsername: vm.userUsername,
                userIp: userIp,
                connection: {
                    ip: vm.connection.ip,
                    user: vm.connection.user,
                    password: vm.connection.password
                }
            });
        }
    })
}

module.exports = { loader };