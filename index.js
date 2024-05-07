const { Bot, logToConsole } = require('grammy');
require('dotenv').config();

const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN);

bot.on('message:text', async (ctx) => {
  if (containsWord(ctx.message.text, 'фильм')) {
    try {
      // Удаляем нежелательное сообщение
      await ctx.api.deleteMessage(ctx.chat.id, ctx.message.message_id);

      // Отправляем предупреждение пользователю
      await ctx.reply("Ваше сообщение содержит нежелательное слово 'фильм'.");
    } catch (error) {
      console.error('Ошибка при удалении сообщения или отправке предупреждения:', error);
    }
  }
});

// Запускаем бота
bot.start();

// Функция для проверки наличия слова в тексте сообщения
function containsWord(text, word) {
  const lowerText = text.toLowerCase();
  const lowerWord = word.toLowerCase();
  // Проверяем, содержит ли текст слово
  return lowerText.includes(lowerWord);
}

