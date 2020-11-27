module.exports = {
    name: 'user-info',
    description: 'User Info!',
    execute (msg, args) {
        msg.channel.send(`Your username: ${msg.author.username}\nYour ID: ${msg.author.id}`);
    }
}