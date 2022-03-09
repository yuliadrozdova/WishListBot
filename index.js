const telegramApi = require('node-telegram-bot-api');
const token = '5203941402:AAFUDdx-OyLo0qlieqx-QuIQ5WAP9S8w3lk';
const bot =  new telegramApi(token, {polling: true})
const {gameOptions} = require('options.js')
const chats = {};



const arrayWishList = [];

const start = () =>{
        
    bot.setMyCommands([
        {command: '/start', description: 'начальное приветствие'},
        {command: '/create', description: 'создать список желаний'},
        {command: '/game', description: 'play game'},
        {command: '/info', description: 'info'},
    ])



    bot.on('message', async msg =>{
        const text = msg.text;
        const chatId = msg.chat.id;
        if(text === '/start'){
            return bot.sendMessage(chatId,  `Write what you want do, ${msg.from.first_name}`);
        }
        if(text === '/create'){
            return bot.sendMessage(chatId, `create`);
        }
        if(text === '/game'){
            console.log(msg)
            return bot.sendMessage(chatId, `game`, gameOptions);
           
        }

        if(text.includes('I want')){
           const wishElem = text.slice(6);
            console.log(msg)
            if(!arrayWishList.includes(wishElem)){
                arrayWishList.push(wishElem);
            }
            console.log(arrayWishList)
            return bot.sendMessage(chatId, `ok`);
        }
        if(text === '/info'){
            console.log(msg)
            console.log(arrayWishList);
            return bot.sendMessage(chatId, `You want ${arrayWishList}`);
            
           
        }
        return bot.sendMessage(chatId, `I do not understand`);
    })

    bot.on('callback_query', async msg =>{
        console.log(msg);
    })
}
start();