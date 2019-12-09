"use strict";

const log = require("loglevel");

const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config");

client.once("ready", function() {
    log.info("Ready!");
});

client.login(config.discord.token);
