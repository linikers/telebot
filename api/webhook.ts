import { VercelRequest, VercelResponse } from '@vercel/node';
import TelegramBot from 'node-telegram-bot-api';
import { setupHandlers } from '../src/handlers';

const token = process.env.TELEGRAM_BOT_TOKEN!;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log('🔔 Webhook chamado!', {
    method: req.method,
    body: req.body,
    headers: req.headers
  });

  try {
    // Aceitar apenas requisições POST
    if (req.method !== 'POST') {
      console.log('❌ Método não permitido:', req.method);
      return res.status(405).json({ error: 'Method not allowed' });
    }

    console.log('✅ Token presente:', !!token);
    
    // Criar instância do bot (sem polling)
    const bot = new TelegramBot(token, { polling: false });

    // Configurar handlers
    setupHandlers(bot);

    // Processar update do Telegram
    const update = req.body;
    console.log('📨 Update recebido:', update);
    
    await bot.processUpdate(update);

    console.log('✅ Processado com sucesso!');
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('❌ Erro no webhook:', error);
    return res.status(500).json({ error: 'Internal server error', details: String(error) });
  }
}