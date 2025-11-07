import TelegramBot from 'node-telegram-bot-api';

export function setupHandlers(bot: TelegramBot) {
  // Comando /start
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '👋 Olá! Eu sou o 7bot e estou pronto para dar as boas-vindas aos novos membros do grupo.');
  });

  // Comando /help
  bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    const helpText = 'Eu envio uma mensagem de boas-vindas sempre que um novo membro entra no grupo.';
    bot.sendMessage(chatId, helpText, { parse_mode: 'Markdown' });
  });

  // Listener para novos membros no grupo
  bot.on('new_chat_members', (msg) => {
    const chatId = msg.chat.id;
    const newMembers = msg.new_chat_members;

    newMembers?.forEach((member) => {
      // Evita que o próprio bot se dê as boas-vindas
      if (!member.is_bot) {
        const welcomeMessage = `✨ É o grupo da sorte! Seja bem-vindo(a), ${member.first_name}! ✨`;
        bot.sendMessage(chatId, welcomeMessage);
      }
    });
  });
}