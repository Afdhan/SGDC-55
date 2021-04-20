let axios = require("axios");
let handler = async(m, { conn, text }) => {
 try {
    if (!text) return conn.reply(m.chat, '_Masukan Teks!_', m)
    if (text.length > 10) return conn.reply(m.chat, '_Teks Terlalu Panjang! Maksimal 10 huruf!_', m)
    await m.reply(global.wait)
    let link = 'https://fzn-gaz.herokuapp.com/api/night?text=' + text;
    conn.sendFile(m.chat, link, 'SGDC-BOT.png', '*SGDC-BOT*', m)
  } catch (e) {
   m.reply('```Error```')
  }
}

handler.command = /^(night(teks)?(text)?)$/i

handler.admin = false
handler.botAdmin = false
handler.premium = true
handler.fail = null

module.exports = handler

//  MUHAMMAD  AFDHAN
