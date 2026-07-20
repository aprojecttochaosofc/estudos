const { Pool } = require("pg");
const callconfigs = require("./config");

const pool = new Pool({
    connectionString: callconfigs("postgre"),
    ssl: { rejectUnauthorized: false }
});

module.exports = function usercreate(ws, data, players) {

    players[data.user] = {
        ws: ws,
        user: data.user
    };

    console.log(players);

    ws.send(JSON.stringify({
        message: "newuser",
        user: data.user
    }));
};
