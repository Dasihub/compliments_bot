require('dotenv').config({path: `.${process.env.NODE_ENV}.env`})
const express = require('express')
const path = require('path')
const TelegramBot = require('node-telegram-bot-api')
const mongoose = require('mongoose')
const {randomCompliment} = require('./compliments')
const {randomSticker} = require('./stickers')
const UserModel = require('./model/userModel')

const app = express()
const PORT = process.env.PORT
const bot = new TelegramBot(process.env.TOKEN, {polling: true})

async function mongodb() {
    try {
        await mongoose.connect(process.env.MONGO, () => console.log('Connect mongodb'))
    } catch (e) {
        console.log(e)
    }
}
mongodb()

bot.setMyCommands([
    {command: '/start', description: 'Приветствие'},
    {command: '/compliments', description: 'Комплименты'}
])

bot.on('message', async (msg) => {
    try {
        console.log(msg)

        const text = msg.text
        const id = msg.chat.id

        if (text == '/start') {
            const user = new UserModel({firstName: msg.from.first_name, username: msg.from.username})
            user.save()

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