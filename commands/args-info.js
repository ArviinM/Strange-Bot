module.exports = {
    name: 'args-info',
    description: 'Args Info!',
    args: true,
    execute (msg, args) {
        if (args[0] === 'foo'){
            return msg.channel.send('bar');
        }
        msg.channel.send(`First argument: ${args[0]}`);
        msg.channel.send(`**Command name:** ${command}\n**Arguments:** ${args}`);
    }
}