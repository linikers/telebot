import { VercelRequest, VercelResponse } from '@vercel/node';
import TelegramBot from 'node-telegram-bot-api';
import { setupHandlers } from '../src/handlers';

const token = process.env.TELEGRAM_BOT_TOKEN!;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Aceitar apenas requisições POST
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    // Criar instância do bot (sem polling)
    const bot = new TelegramBot(token, { polling: false });

    // Configurar handlers
    setupHandlers(bot);

    // Processar update do Telegram
    const update = req.body;
    await bot.processUpdate(update);

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Erro no webhook:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}