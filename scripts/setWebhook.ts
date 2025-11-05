import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';

dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN!;
const webhookUrl = process.env.WEBHOOK_URL!;

async function setWebhook() {
  const bot = new TelegramBot(token);
  
  try {
    // Remover webhook antigo
    await bot.deleteWebHook();
    console.log('✅ Webhook antigo removido');

    // Configurar novo webhook
    await bot.setWebHook(webhookUrl);
    console.log(`✅ Webhook configurado: ${webhookUrl}`);

    // Verificar webhook
    const info = await bot.getWebHookInfo();
    console.log('📋 Info do webhook:', info);
  } catch (error) {
    console.error('❌ Erro ao configurar webhook:', error);
  }
}

setWebhook();