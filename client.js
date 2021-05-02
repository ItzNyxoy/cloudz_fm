const Aoijs = require("aoi.js");

const bot = new Aoijs.Bot({
token: "TOKEN",
prefix: "!" 
});

bot.onMessage();

bot.command({
name: "ping",
code: `$ping Pong!`
});