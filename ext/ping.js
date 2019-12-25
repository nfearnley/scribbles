"use strict";

function setup(bot) {
    bot.registerCommand("ping", function ping(msg, args) {
        msg.reply("pong");
    });
}

function teardown(bot) {
    bot.unregisterCommand("ping");
}

module.exports = {
    setup,
    teardown
};
