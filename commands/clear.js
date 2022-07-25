module.exports = {
    name: 'clear',
    description: "Clear Messages",
    async execute(message, args) {

        if(message.member.roles.cache.has('1000723834623754381')){
            
        if(!args[0]) return message.reply('**Please specify the amount of messages you want to delete.**');
        if(isNaN(args[0])) return message.reply('**Please specify the amount of messages you want to delete.**');

        if(args[0] > 250) return message.reply("**You can't delete more than 250 messages.**");
        if(args[0] < 1) return message.reply("**You must delete more than 1 message.**");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{ 
            message.channel.bulkDelete(messages);
        })


    } else {
        message.channel.send("**You can't use this command as you don't have the specified role for it.**");
    }
    
    }

}
