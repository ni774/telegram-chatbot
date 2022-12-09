const { Telegraf } = require('telegraf');


// get secret token from botfather from telegram
//  to read instruction type /start and press enter
//   and to creat new bot type /newbot 
//   then give bot name and username  --> https://t.me/nikhil_carrer_path_bot


const bot = new Telegraf('5983185911:AAHjgsf-dqkV7e0Utm9vxFJbV8rv-2TQWvk');
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.command('binarysearch', (ctx) => ctx.reply('Hello binary search'))
bot.command('modern', ({ reply }) => reply('Yo'))
bot.command('hipster', Telegraf.reply('λ'))
bot.launch()