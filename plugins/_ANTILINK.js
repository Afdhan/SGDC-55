let handler = async function(m, { conn , args, isAdmin, isBotAdmin }) {

  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let usname = conn.getName(who)
  let mentionedJid = [m.sender]
  let name = m.fromMe ? conn.user : conn.contacts[m.sender]
  let users = m.sender
  let chat = global.DATABASE.data.chats[m.chat]
 if (chat.antiLink) { 
 await conn.reply(m.chat, `
*[ CHAT ANTI LINK ]*

_Terdeteksi *${usname}* telah mengirim link group!_

Maaf Kamu akan dikick oleh *SGDC-BOT*
`.trim(), m)
 conn.groupRemove(m.chat, [users])
    } else if (!chat.antiLink) return m.reply('```AKTIFIN ANTILINK! BIAR GUA KILL NI BOCAH !!```')
 }

handler.customPrefix = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.command = new RegExp
handler.group = true
handler.fail = null

module.exports = handler
