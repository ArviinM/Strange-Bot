module.exports = {
    name: 'avatar',
    description: 'Gives back an avatar link of a user',
    execute (msg, args) {
        if (!msg.mentions.users.size) {
            return msg.channel.send(`Your avatar: <${msg.author.displayAvatarURL({ dynamic: true})}>`)
        }
        const avatarList = msg.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL({ dynamic: true })}>`;
        })
        msg.channel.send(avatarList);
    }
}