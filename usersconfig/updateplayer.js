const { Pool } = require("pg");
const callconfigs = require("./config");

const pool = new Pool({
    connectionString: callconfigs("postgre"),
    ssl: { rejectUnauthorized: false }
});

module.exports = function updateplayer(ws, data, players) {

    const player = players[data.userid];

    if (!player) {
        return;
    }

    player.x = data.x;
    player.y = data.y;
    player.z = data.z;

    player.rx = data.rx;
    player.ry = data.ry;
    player.rz = data.rz;

    player.armtrx = data.armtrx;
    player.armtry = data.armtry;
    player.armtrz = data.armtrz;

    player.walk = data.walk;
    player.run = data.run;
    player.onground = data.onground;
    player.atack = data.atack;

    console.log(players);
};
