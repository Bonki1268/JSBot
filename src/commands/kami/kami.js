import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
  .setName("蔡宥澄")
  .setDescription("真的假的");

export const action = async (interaction) => {
  await interaction.reply("555555");
};
