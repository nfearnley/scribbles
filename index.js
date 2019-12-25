"use strict";

const log = require("loglevel");

const config = require("./config");
const Eris = require("erisplus")(require("Eris"));

log.enableAll();

var bot = new Eris.CommandClient(config.discord.token, {}, {
    description: "A friendly welcome bot",
    owner: "Natalie",
    prefix: "!"
});

bot.once("ready", function() {
    log.info("Ready!");
});

bot.loadExtensions("ext");

bot.connect();
