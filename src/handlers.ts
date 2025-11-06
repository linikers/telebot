import TelegramBot from 'node-telegram-bot-api';

export function setupHandlers(bot: TelegramBot) {
  // Comando /start
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '👋 Olá! Bem-vindo ao bot. Use /help para ver os comandos.');
  });

  // Comando /help
  bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    const helpText = `
 *Comandos disponíveis:*

/start - Inicia o bot
/help - Mostra esta mensagem
/echo <texto> - Repete o texto enviado
    `;
    bot.sendMessage(chatId, helpText, { parse_mode: 'Markdown' });
  });

  // Comando /echo
  bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const text = match?.[1];
    bot.sendMessage(chatId, text || 'Nenhum texto fornecido');
  });

  // Mensagens gerais
  bot.on('message', (msg) => {
    if (!msg.text?.startsWith('/')) {
      const chatId = msg.chat.id;
      bot.sendMessage(chatId, `Você disse: "${msg.text}"`);
    }
  });
}