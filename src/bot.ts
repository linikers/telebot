import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN!);

// Comando /start
bot.start((ctx) => {
  ctx.reply('Olá! Bem-vindo ao bot 👋');
});

// Comando /help
bot.help((ctx) => {
  ctx.reply('Comandos disponíveis:\n/start - Iniciar\n/help - Ajuda');
});

// Responder a qualquer mensagem
bot.on('text', (ctx) => {
  ctx.reply(`Você disse: ${ctx.message.text}`);
});

// Iniciar o bot
bot.launch().then(() => {
  console.log('🤖 Bot está rodando!');
});

// Parar o bot graciosamente
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));