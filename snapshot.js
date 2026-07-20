module.exports = function snapshot(players) {

    for (const senderId in players) {

        const sender = players[senderId];

        for (const receiverId in players) {

            if (receiverId === senderId)
                continue;

            const receiver = players[receiverId];

            receiver.ws.send(JSON.stringify({
                message: "playerupdate",
                player: sender
            }));
        }
    }
};
