const fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client();
const { prefix, token } = require('./config.json');

bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}



bot.on('ready', () => {
    console.log('Strange Bot 🤖 is Ready! '); 
    bot.user.setPresence({
        status: "online",  // You can show online, idle... Do not disturb is dnd
        game: {
            name: ".help",  // The message shown
            type: "PLAYING" // PLAYING, WATCHING, LISTENING, STREAMING,
        }
    });
})

bot.on('message', msg => {
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!bot.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    if(command.args && !args.length) { 
        return msg.channel.send(`You didn't provide any arguments, ${message.author}!`)
    }

    try {
        command.execute(msg, args);
    } catch (error) {
        console.error(error);
        msg.reply('there was an error trying to execute that command.')
    }
})

bot.login(token);

