const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const homepage = require("./home");
const cadastro = require("./cadastro");
const usercreate = require("./usercreate");
const updateplayer = require("./updateplayer");

const app = express();

const players = {};

app.get("/", (req, res) => {
    homepage(req, res);
});

app.get("/cadastro", (req, res) => {
    cadastro(req, res);
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {

    ws.on("message", (msg) => {
        const data = JSON.parse(msg.toString());

        if (data.message == "startserver") {
            usercreate(ws, data, players);
        }
        if (data.message == "updateplayer") {
            updateplayer(ws, data);
        }
    });

});

server.listen(process.env.PORT || 3000, () => {
    console.log("Servidor online");
});
