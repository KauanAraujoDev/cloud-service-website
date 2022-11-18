const loader = async (socket, socketIp, googleListVM, azureListVM) => {
    console.log('Verificando se o usuário já tem uma VM criada');
    googleListVM.forEach((vm) => {
        if(vm.userIp === socketIp) {

            socket.emit('vmCreator', {
                status: vm.status, 
                userEmail: vm.userEmail, 
                userUsername: vm.userUsername,
                userIp: vm.userIp,
                connection: {
                    ip: vm.connection.ip,
                    user: vm.connection.user,
                    password: vm.connection.password
                }
            });
        }
    })
    azureListVM.forEach((vm) => {
        if(vm.userIp === socketIp) {

            socket.emit('vmCreator', {
                status: vm.status, 
                userEmail: vm.userEmail, 
                userUsername: vm.userUsername,
                userIp: vm.userIp,
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