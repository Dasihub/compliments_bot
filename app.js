require('dotenv').config()
const express = require('express')
const path = require('path')
const TelegramBot = require('node-telegram-bot-api')
const {randomCompliment} = require('./compliments')
const {randomSticker} = require('./stickers')

const app = express()
const PORT = process.env.PORT
const bot = new TelegramBot(process.env.TOKEN, {polling: true})

bot.setMyCommands([
    {command: '/start', description: 'Приветствие'},
    {command: '/compliments', description: 'Комплименты'}
])

bot.on('message', async (msg) => {
    try {

        const text = msg.text
        const id = msg.chat.id

        if (text == '/start') {
            await bot.sendMessage(id, 'Привет, я бот. Меня создал программист Dosya')
            return bot.sendMessage(id, 'Что я умею? Я умею говорить комплименты!')
        }

        if (text == '/compliments') {
            await bot.sendMessage(id, randomCompliment())
            return bot.sendSticker(id, randomSticker())
        }

        bot.sendMessage(id, ('Я не понимаю ваш запрос'))
    } catch (e) {
        console.log(e)
    }
})

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('*', (req, res) => res.sendFile('index.html', {root: path.resolve(__dirname, 'public')}))

app.listen(PORT, () => console.log(`Start server in port ${PORT}`))