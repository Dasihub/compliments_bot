const stickers = [
    'https://tlgrm.ru/_/stickers/9a7/7f7/9a77f786-1e16-3095-a0f8-8cdeae5a0326/2.webp',
    'https://tlgrm.ru/_/stickers/9a7/7f7/9a77f786-1e16-3095-a0f8-8cdeae5a0326/4.webp',
    'https://tlgrm.ru/_/stickers/9a7/7f7/9a77f786-1e16-3095-a0f8-8cdeae5a0326/8.webp',
    'https://tlgrm.ru/_/stickers/9a7/7f7/9a77f786-1e16-3095-a0f8-8cdeae5a0326/7.webp',
    'https://tlgrm.ru/_/stickers/9a7/7f7/9a77f786-1e16-3095-a0f8-8cdeae5a0326/6.webp',
    'https://tlgrm.ru/_/stickers/9a7/7f7/9a77f786-1e16-3095-a0f8-8cdeae5a0326/10.webp',
    'https://tlgrm.ru/_/stickers/9a7/7f7/9a77f786-1e16-3095-a0f8-8cdeae5a0326/12.webp',
    'https://tlgrm.ru/_/stickers/9a7/7f7/9a77f786-1e16-3095-a0f8-8cdeae5a0326/192/31.webp',
    'https://tlgrm.ru/_/stickers/9a7/7f7/9a77f786-1e16-3095-a0f8-8cdeae5a0326/192/36.webp',
    'https://tlgrm.ru/_/stickers/9a7/7f7/9a77f786-1e16-3095-a0f8-8cdeae5a0326/192/35.webp',
]

const randomSticker = () => {
    const random = Math.floor(Math.random() * 10)
    return stickers[random]
}

module.exports = {randomSticker}