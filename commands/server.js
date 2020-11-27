module.exports = {
    name: 'server',
    description: 'Server Name!',
    execute (msg, args) {
        msg.channel.send(`**Server name:** ${msg.guild.name}\n**Members:** ${msg.guild.memberCount}\n**Created at:** ${msg.guild.createdAt}`);
    }
}