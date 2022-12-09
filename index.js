const { Telegraf } = require('telegraf');
require('dotenv').config();


// get secret token from botfather from telegram
//  to read instruction type /start and press enter
//   and to creat new bot type /newbot 
//   then give bot name and username  --> https://t.me/nikhil_carrer_path_bot
   //live location function
        // function sendLiveLocation (ctx) {
        //     let lat = 42.0
        //     let lon = 42.0
        //     ctx.replyWithLocation(lat, lon, { live_period: 60 }).then((message) => {
        //     const timer = setInterval(() => {
        //         lat += Math.random() * 0.001
        //         lon += Math.random() * 0.001
        //         ctx.telegram.editMessageLiveLocation(lat, lon, message.chat.id, message.message_id).catch(() => clearInterval(timer))
        //     }, 1000)
        //     })
        // }

const bot = new Telegraf(process.env.API_KEY);
        const { Extra, Markup } = Telegraf

        const keyboard = Markup.keyboard([
          Markup.pollRequestButton('Create poll', 'regular'),
          Markup.pollRequestButton('Create quiz', 'quiz')
        ])
        
        
        bot.on('poll', (ctx) => console.log('Poll update', ctx.poll))
        bot.on('poll_answer', (ctx) => console.log('Poll answer', ctx.pollAnswer))
        
        bot.start((ctx) => ctx.reply('supported commands: /poll /quiz', Extra.markup(keyboard)))
        
        bot.command('poll', (ctx) =>
          ctx.replyWithPoll(
            'Your favorite math constant',
            ['x', 'e', 'π', 'φ', 'γ'],
            { is_anonymous: false }
          )
        )
        bot.command('quiz', (ctx) =>
          ctx.replyWithQuiz(
            '2b|!2b',
            ['True', 'False'],
            { correct_option_id: 0 }
          )
        )
console.log("server started....")
bot.launch()