
module.exports = function disconnectuser(ws, data, players) {

    const user = data.user;

    if (players[user]) {

        delete players[user];

        console.log("Usuário removido:", user);

    }

};
