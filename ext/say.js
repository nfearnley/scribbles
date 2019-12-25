"use strict";

function setup(bot) {
    bot.registerCommand("say", function ping(msg, args) {
        msg.reply(args.join(" "));
    });
}

function teardown(bot) {
    bot.unregisterCommand("say");
}

module.exports = {
    setup,
    teardown
};
