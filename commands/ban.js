module.exports = {
    name: 'ban',
    description: "Ban Users",
    async execute(message, args) {
         
        if(message.member.roles.cache.has('1000831781269930025')){
            
            const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send('User has been banned from the server!');
        }else{
            message.channel.send("**Command: t!ban @user**");
        }

        } else {
            message.channel.send("**You are missing the required role to use this command.**");
        }
        
    }

}