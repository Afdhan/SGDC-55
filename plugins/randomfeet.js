let axios = require("axios");
let handler = async(m, { conn, text }) => {
let chat = global.DATABASE.data.chats[m.chat]
    if (chat.nsfw) { 
  await m.reply('*[ WAIT ]* _Sedang Diproses..._')
let link = 'http://lolhuman.herokuapp.com/api/random2/feet?apikey=761e676c13e7710a48011b2b'

   conn.sendFile(m.chat, link, 'SGDC-BOT.png', 'No Colay:v\n\n*[ • SGDC-BOT • ]*', m)
   } else if (!chat.nsfw) return m.reply('```Perlu Mengaktifkan Mode NSFW```')
}

handler.command = /^(feet|randomfeet)$/i


handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

//  MUHAMMAD AFDHAN

module.exports = handler


//   MUHAMMAD AFDHAN