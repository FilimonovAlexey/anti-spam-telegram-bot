const { Bot, logToConsole } = require('grammy');
const fs = require('fs');
require('dotenv').config();

const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN);

const forbiddenWords = fs.readFileSync('./banword.txt', 'utf-8')
  .split('\n')
  .map(word => word.trim().toLowerCase())
  .filter(word => word.length > 0);

bot.on('message:text', async (ctx) => {
  const messageText = ctx.message.text.toLowerCase();

  const containsForbiddenWord = forbiddenWords.some((word) => messageText.includes(word));

  if (containsForbiddenWord) {
    try {
      await ctx.api.deleteMessage(ctx.chat.id, ctx.message.message_id);

      const warningMessage = 'В чате запрещен мат!';
      await ctx.reply(warningMessage);
    } catch (error) {
      console.error('Ошибка при удалении сообщения или отправке предупреждения:', error);
    }
  }
});

bot.catch((err) => {
  const ctx = err.ctx;
  logger.error(`Error while handling update ${ctx.update.update_id}:`, err);
});

bot.start();