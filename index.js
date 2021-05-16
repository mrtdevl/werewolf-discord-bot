// import dotenv from 'dotenv';

const dotenv = require('dotenv');
dotenv.config();
const Discord = require('discord.js');
const { prefix } = require('./config.json');


// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// login to Discord with your app's token
client.login(process.env.TOKEN);

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'start') {
		// to something
	}

	else if(command === 'delete') {
		const amount = parseInt(args[0]) + 1;

		switch(amount) {
		case isNaN(amount) :
			return message.reply('That doesn\'t seem to be a valid number.');
		case (amount <= 1 || amount > 100):
			return message.reply('You need to input a number between 1 and 99.');
		default:
			message.channel.bulkDelete(amount, true).catch(err => {
				console.error(err);
				message.channel.send('there was an error trying to prune messages in this channel!');
			});
			break;
		}
	}
});
