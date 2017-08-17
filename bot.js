// 建立一個 Bot
//import TelegramBot from 'node-telegram-bot-api';
var TelegramBot = require('node-telegram-bot-api');

const token = '416240066:AAGDz7sDyC94oHQi2jwCe6tmnajvHwclmio';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, msg => {

    console.log(msg); // for debug
    const chatId = msg.chat.id;
    bot.sendmsg(chatId, 'Hello World');

});

bot.onText(/\/吃飯飯/, msg => {

    const chatId = msg.chat.id;
    console.log(chatId); // for debug
    bot.sendmsg(chatId, '去你的飯飯');

});

bot.onText(/\/飯飯/, msg => {

    const chatId = msg.chat.id;
    console.log(chatId); // for debug
    bot.sendmsg(chatId, '去你的飯飯');

});

bot.onText(/\/hi/, msg => {
    
    const chatId = msg.chat.id;
    console.log(chatId); // for debug
    bot.sendmsg(chatId, '想幹嘛!');
    console.log(msg.chat.first_name);
    console.log(msg.chat.username);
    //console.log(msg.chat.type);
    //console.log(msg.chat.text);


});

bot.onText(/\/help/, msg => {
    
    const chatId = msg.chat.id;
    console.log(chatId); // for debug
    bot.sendmsg(chatId, '\n111\n222\n333\n');

});

// On every text message
bot.on('text', msg => {
    let id = msg.from.id;
    let text = msg.text;
    return bot.sendMessage(id, `You said: ${ text }`);

    return bot.sendMessage(id, `You said: ${ text }`);
});
