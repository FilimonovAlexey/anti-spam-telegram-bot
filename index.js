const { Bot, logToConsole } = require('grammy');
require('dotenv').config();

const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN);

// Массив с недопустимыми словами (можно расширить по мере необходимости)
const forbiddenWords = ['мат1', 'мат2', 'мат3']; // Замените на настоящие слова мата

// Регулярное выражение для поиска реферальных ссылок
const referralLinkRegex = /(http|https):\/\/[^\s]*\?ref=[^\s]*/i;

bot.on('message:text', async (ctx) => {
  const messageText = ctx.message.text.toLowerCase();

  const containsForbiddenWord = forbiddenWords.some((word) => messageText.includes(word));

  const containsReferralLink = referralLinkRegex.test(messageText);

  if (containsForbiddenWord || containsReferralLink) {
    try {
      await ctx.api.deleteMessage(ctx.chat.id, ctx.message.message_id);

      let warningMessage = 'Ваше сообщение нарушает правила чата.';

      if (containsForbiddenWord) {
        warningMessage = 'В чате запрещен мат!';
      } else if (containsReferralLink) {
        warningMessage = 'Реферальные ссылки запрещены!';
      }

      await ctx.reply(warningMessage);
    } catch (error) {
      console.error('Ошибка при удалении сообщения или отправке предупреждения:', error);
    }
  }
});

bot.start();