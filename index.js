"use strict";

const log = require("loglevel");

const Eris = require("eris");

const config = require("./config");

log.enableAll();

var bot = new Eris(config.discord.token);

bot.once("ready", function() {
    log.info("Ready!");
});

bot.connect();
