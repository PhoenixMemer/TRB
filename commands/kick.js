module.exports = {
    name: 'kick',
    description: "Kick Users",
    async execute(message, args) {
         
        if(message.member.roles.cache.has('1000831781269930025')){
            
            const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send('User has been kicked from the server!');
        }else{
            message.channel.send("**Command: t!kick @user**");
        }

        } else {
            message.channel.send("**You are missing the required role to use this command.**");
        }
        
    }

}