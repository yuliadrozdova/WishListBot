module.exports = {

    gameOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Телефон', callback_data: 'Телефон'}],
                [{text: 'Цветы', callback_data: 'Цветы'}],
                [{text: 'Конфеты', callback_data: 'Конфеты'}],
                [{text: 'Блокнот', callback_data: 'Блокнот'}],
            ]
        })
    }
    
}