# 🤖 Bot do Telegram

Bot desenvolvido em TypeScript usando a biblioteca Telegraf para interagir com a API do Telegram.

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Yarn](https://yarnpkg.com/)
- Uma conta no Telegram

## 🚀 Configuração Inicial

### 1. Criar o bot no Telegram

1. Abra o Telegram e procure por **@BotFather**
2. Envie o comando `/newbot`
3. Escolha um nome para seu bot
4. Escolha um username (deve terminar com "bot")
5. Copie o **token de API** fornecido

### 2. Clonar e instalar dependências

```bash
# Clone o repositório (ou crie o projeto)
git clone seu-repositorio
cd meu-bot-telegram

# Instale as dependências
yarn install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
BOT_TOKEN=seu_token_aqui
```

⚠️ **Importante**: Nunca compartilhe seu token publicamente!

## 📁 Estrutura do Projeto

```
meu-bot-telegram/
├── src/
│   └── bot.ts          # Arquivo principal do bot
├── dist/               # Arquivos compilados (gerado automaticamente)
├── .env                # Variáveis de ambiente (não versionar)
├── .gitignore
├── package.json
├── tsconfig.json
└── yarn.lock
```

## 🛠️ Scripts Disponíveis

### Desenvolvimento

Inicia o bot em modo de desenvolvimento com hot reload:

```bash
yarn dev
```

### Build

Compila o TypeScript para JavaScript:

```bash
yarn build
```

### Produção

Executa o bot compilado:

```bash
yarn start
```

## 📚 Comandos do Bot

- `/start` - Inicia a conversa com o bot
- `/help` - Mostra os comandos disponíveis

## 🔧 Tecnologias Utilizadas

- [TypeScript](https://www.typescriptlang.org/) - Linguagem de programação
- [Node.js](https://nodejs.org/) - Runtime JavaScript
- [Telegraf](https://telegraf.js.org/) - Framework para bots do Telegram
- [dotenv](https://github.com/motdotla/dotenv) - Gerenciamento de variáveis de ambiente
- [tsx](https://github.com/esbuild-kit/tsx) - Executor TypeScript para desenvolvimento

## 📖 Como Adicionar Novos Comandos

Edite o arquivo `src/bot.ts` e adicione novos comandos:

```typescript
// Comando simples
bot.command('meucomando', (ctx) => {
  ctx.reply('Resposta do comando');
});

// Comando com parâmetros
bot.command('echo', (ctx) => {
  const texto = ctx.message.text.split(' ').slice(1).join(' ');
  ctx.reply(texto || 'Envie um texto após o comando');
});
```

## 🎯 Exemplo de Uso

```typescript
// Responder a mensagens específicas
bot.hears('oi', (ctx) => {
  ctx.reply('Olá! Como posso ajudar?');
});

// Trabalhar com botões inline
bot.command('opcoes', (ctx) => {
  ctx.reply('Escolha uma opção:', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Opção 1', callback_data: 'op1' }],
        [{ text: 'Opção 2', callback_data: 'op2' }]
      ]
    }
  });
});

// Lidar com callbacks de botões
bot.action('op1', (ctx) => {
  ctx.answerCbQuery();
  ctx.reply('Você escolheu a Opção 1!');
});
```

## 🐛 Troubleshooting

### Erro de execução de scripts no PowerShell

Se aparecer erro de política de execução:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Bot não responde

- Verifique se o token está correto no arquivo `.env`
- Confirme que o bot está rodando (`yarn dev`)
- Teste enviando `/start` no chat do bot

## 📝 Licença

Este projeto está sob a licença MIT.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📞 Suporte

- [Documentação do Telegraf](https://telegraf.js.org/)
- [Documentação da API do Telegram](https://core.telegram.org/bots/api)
- [Telegram Bot API](https://core.telegram.org/bots)

---

Feito com ❤️ usando TypeScript e Telegraf