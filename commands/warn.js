const { Message, MessageEmbed } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: 'warn',
    description: "Warn Users",
    async execute(message, args) {
            if(!message.member.permissions.has("MANAGE_MEMBERS")) return message.reply({ content: "**You don't have perms to warn users.**"});

            let user = message.mentions.members.first() || client.users.cache.get(args[0]);
            let reason = args.slice(1).join(' ')
            
            if (!user) return message.reply({ content: "**Command: t!warn @user"});

            let embed = new MessageEmbed()
            .setAuthor({ name: message.author.tag, iconURL: user.displayAvatarURL({ dynamic: true }) })
            .setDescription(`${message.author} warned ${user} \n\n Reason: ${reason ? reason: 'No reason provided.'}`)
            .setTimestamp()
            .setFooter({ text: `${user.tag || user.user.tag}`, iconURL: user.displayAvatarURL({ dynamic: true}) || user.user.displayAvatarURL({ dynamic: true }) })
            message.reply({ embeds: [embed] }).then(() => {
                db.add(`warns_${user.id}`, 1)
                let dm = new MessageEmbed()
                .setDescription(`"You were warned by ${message.author} warned ${user} \n\n Reason: ${reason ? reason: 'No reason provided.'}`)
                .setTimestamp()
                user.send({ embeds: [embed] })
            });
    }
}
