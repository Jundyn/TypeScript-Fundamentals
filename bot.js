// Import Bolt
const { App } = require("@slack/bolt");

// Initialize your app with your bot token and signing secret
const app = new App({
  token: "xoxb-10521070610887-10549719529569-4g5UHobgZmlcX9F0ouT48", // Replace with your Bot User OAuth Token
  signingSecret: "f3dc171d4458778199d10e066da527", // Replace with your App's signing secret
});

// Listen for the /hello command
app.command("/hello", async ({ command, ack, say }) => {
  await ack(); // Acknowledge the command
  await say(`Hello <@${command.user_id}>! 👋`);
});

// Log all messages in channels
app.message(async ({ message, say }) => {
  console.log(`Received message: ${message.text}`);
});

// Start the app
(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Slack bot is running!");
})();
