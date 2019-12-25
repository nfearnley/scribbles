"use strict";

const config = require("../config");

function isOwner(msg) {
    return msg.author.id === config.ownerId;
}

function load(msg, args) {
    var extname = args[0];
    try {
        msg.bot.loadExtension(extname);
    }
    catch (err) {
        if (err.code === "EXTENSION_ALREADY_LOADED") {
            msg.reply(`Can't load "${extname}". It is already loaded.`);
            return;
        }
        if (err.code === "EXTENSION_NOT_FOUND") {
            msg.reply(`Could not find "${extname}".`);
            return;
        }
        throw err;
    }
    msg.reply(`Loaded "${extname}".`);
}

function unload(msg, args) {
    var extname = args[0];
    try {
        msg.bot.reloadExtension(extname);
    }
    catch (err) {
        if (err.code === "EXTENSION_NOT_LOADED") {
            msg.reply(`Can't reload "${extname}". It is not yet loaded.`);
            return;
        }
        if (err.code === "EXTENSION_NOT_FOUND") {
            msg.reply(`Could not find "${extname}".`);
            return;
        }
        throw err;
    }
    msg.reply(`Reloaded "${extname}".`);
}

function reload(msg, args) {
    var extname = args[0];
    try {
        msg.bot.unloadExtension(extname);
    }
    catch (err) {
        if (err.code === "EXTENSION_NOT_LOADED") {
            msg.reply(`Can't unload "${extname}". It is not yet loaded.`);
            return;
        }
        throw err;
    }
    msg.reply(`Unloaded "${extname}".`);
}

function setup(bot) {
    var commandOptions = {
        requirements: {
            custom: isOwner
        }
    };

    bot.registerCommand("load", load, commandOptions);
    bot.registerCommand("reload", unload, commandOptions);
    bot.registerCommand("unload", reload, commandOptions);
}

function teardown(bot) {
    bot.unregisterCommand("load");
    bot.unregisterCommand("reload");
    bot.unregisterCommand("unload");
}

module.exports = {
    setup,
    teardown
};
