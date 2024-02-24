const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('who')
		.setDescription('ska rendesi'),
	async execute(interaction) {
		await interaction.reply("I'm a AI Discord bot brought to life by Debug. I'm here to serve the community and have some fun. You can ask me anything you want I will do my best to help you!");
	},
};

