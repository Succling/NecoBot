require('dotenv').config();

const { invalidCommandUsage } = require('../../handlers/errorHandler');
const imageSearch = require('image-search-google');
const { MessageEmbed } = require('discord.js');
const googleClient = new imageSearch(process.env.CSE_ID, process.env.GOOGLE_KEY);

module.exports = {
	name: 'imageOld',
	description: 'Searches in Google with the input of the user.',
	aliases: 'imgOld',
	usage: '`b!image <query>`',
	cooldown: 0,
	async execute(message, _client, _commandObject, command) {

		console.log('Going into image.js');

		const query = message.content.slice(command.length + 3);

		if (!query) return invalidCommandUsage(message, this.name, this.usage);

		googleClient.search(query, { page:1 }).then(images => {
			// TODO: Add buttons that show the next image on the page, and one to go to a previous image
			if (!images[0]) return message.reply('No search results found!');

			const googleSearchEmbed = new MessageEmbed()
				.setColor('RANDOM')
				.setImage(images[0].url)
				.setTitle(images[0].snippet)
				.setDescription(images[0].context)
				.setFooter({ text: `Images for ${query}` });

			message.reply({ embeds: [googleSearchEmbed] });
		});
	},
};
