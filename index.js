const TOKEN = process.env.TELEGRAM_TOKEN || 'Paste your Token Here...'
const TelegramBot = require('node-telegram-bot-api')

const options = {
    polling: true
}

auth_users = [
    12345678, // Delete these and add your own user id
    87654321
]

const KEYBOARD = {
    reply_markup: JSON.stringify({
        keyboard: [
            ['/id', '/keyboard'],
            ['by', 'Apal', 'Shah'],
            ['github.com/apal21']
        ]
    })
}

const bot = new TelegramBot(TOKEN, options)

bot.onText(/(.+)/, (msg, match) => {
    if (match[0] == '/id') {
        bot.sendMessage(msg.chat.id, 'Your ID: ' + msg.from.id, KEYBOARD)    
    } else if (authenticate_users(msg.from.id)) {
        bot.sendMessage(msg.chat.id, match[0], KEYBOARD)    
    } else {
        bot.sendMessage(msg.chat.id, 'Unauthorized User', KEYBOARD)    
    }
})

function authenticate_users(id) {
    for(let i = 0; i < auth_users.length; i++) {
        if (auth_users[i] == id) {
            return true
        }
    }
    return false
}