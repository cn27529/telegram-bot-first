// 建立一個 Bot
//import TelegramBot from 'node-telegram-bot-api';
var TelegramBot = require('node-telegram-bot-api');

const token = '416240066:AAGDz7sDyC94oHQi2jwCe6tmnajvHwclmio';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, message => {

    console.log(message); // for debug
    const chatId = message.chat.id;
    bot.sendMessage(chatId, 'Hello World');

});

//  /\/吃飯飯/
bot.onText(/\/吃飯飯/, message => {

    console.log(message); // for debug
    const chatId = message.chat.id;
    bot.sendMessage(chatId, '去你的飯飯');

});
