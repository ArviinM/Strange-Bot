const fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const { prefix, token} = require('./config.json');


bot.on('ready', () => {console.log('Strange Bot 🤖 is Ready! ');})

bot.on('message', msg => {
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (msg.content.startsWith(`${prefix}ping`)){
        msg.channel.send('Pong 🏓');
    } else if (msg.content.startsWith(`${prefix}beep`)){
        msg.channel.send('Boopbep 🐶');
    } else if (msg.content.startsWith(`${prefix}server`)){
        msg.channel.send(`**Server name:** ${msg.guild.name}\n**Members:** ${msg.guild.memberCount}\n**Created at:** ${msg.guild.createdAt}`);
    } else if (msg.content === `${prefix}user-info`) {
        msg.channel.send(`Your username: ${msg.author.username}\nYour ID: ${msg.author.id}`);
    } else if (command === 'args-info'){
        if (!args.length){
            return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`)
        } else if (args[0] === 'foo'){
            return msg.channel.send('bar');
        }
        msg.channel.send(`First argument: ${args[0]}`);
        msg.channel.send(`**Command name:** ${command}\n**Arguments:** ${args}`);
    } else if (command === 'avatar') {
        if (!msg.mentions.users.size) {
            return msg.channel.send(`Your avatar: <${msg.author.displayAvatarURL({ dynamic: true})}>`)
        }

        const avatarList = msg.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL({ dynamic: true })}>`;
        })

        msg.channel.send(avatarList);
    }
})

bot.login(token);

