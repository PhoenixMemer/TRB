module.exports = {
    name: 'ping',
    description: "To see if the bot is working.",
    execute(message, args){
        message.channel.send('**Pong!**');
    }
}