let axios = require("axios");
let kntl = require("../src/kntl.json");
let handler = async(m, { conn, text }) => {
let chat = global.DATABASE.data.chats[m.chat]
    if (chat.nsfw) { 
    let api = (kntl.lolkey)
  	await m.reply(global.wait)
      let link = 'http://lolhuman.herokuapp.com/api/random/shinobu?apikey=' + api;
      conn.sendFile(m.chat, link, 'SGDC-BOT.png', 'No Colay:v\n\n*SGDC-BOT*', m)
     } else {
         m.reply('```Perlu Mengaktifkan Mode NSFW```')
     }
 }

handler.command = /^(shinobu|randomshinobu|sinobu)$/i

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