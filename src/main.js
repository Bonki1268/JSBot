//啟動機器人
import { Client, Events, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import vueinit from "@/core/vue";

vueinit();
dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(process.env.TOKEN);
//結束
