const { Pool } = require("pg");
const callconfigs = require("./config");

const pool = new Pool({
    connectionString: callconfigs("postgre"),
    ssl: { rejectUnauthorized: false }
});

module.exports = function updateplayer(ws, data, players) {

    ws.send(JSON.stringify({
        message: "snapshot",
        user: data.user
    }));
};
