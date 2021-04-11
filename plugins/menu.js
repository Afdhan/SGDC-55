let MessageType = require ('@adiwajshing/baileys')
let axios = require ('axios')
let fs = require ('fs')
let util = require('util')
let path = require('path')
let { spawn } = require('child_process')
let { performance } = require('perf_hooks')
let handler  = async (m, { conn, args, usedPrefix: _p }) => {
 try {
    let old = performance.now()
    await conn.fakeReply(m.chat, '```L o a d i n g . . .```', '0@s.whatsapp.net', '*MEMUAT LIST MENU*')
    let neww = performance.now()
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let bname = package.name
    let vers = package.version
    let dsci = package.description
    let apikey = 'XinzBot'
    let ree = await axios.get(`https://xinzbot-api.herokuapp.com/api/ucapan?apikey=${apikey}&timeZone=Asia/Jakarta`)
    let cpn = ree.data.result
    let res = await axios.get(`https://xinzbot-api.herokuapp.com/api/hitungmundur?apikey=${apikey}&tanggal=13&bulan=4`)
    let rmd = res.data.result
    let gc = 'https://tinyurl.com/ygu7vxny'
    let name = conn.getName(m.sender)
    let desc = 'Powered by'
    let ping = neww - old + ' ms'
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let reg = Object.values(global.DATABASE._data.users).filter(user => user.registered == false).length
    let own = '6282252655313@s.whatsapp.net'
    let kntl = m.sender
    let poto = 'src/SGDC_BOT.jpg'
    let mn = `
*━━━━━━━━━━━━━━━━━━━━━*
_Hai, Selamat ${cpn} Kak @${kntl.split("@")[0]}_

*❏ WARNING ❏*
   _Sebagian fitur mungkin ada beberapa yang error, karena apikey sudah kehabisan limit atau invalid!_
❍ ~( APIKEY GRATISAN )~ ❍
*━━━━━━━━━━━━━━━━━━━━━*
❍ *INFO* ❍
❏ Owner: @${own.split("@")[0]}
❏ Github: ( Cek Di Grup ${bname} )
❏ Instagram: @dhans11__
❏ Facebook: Muhammad Afdhan
❏ Telegram: @Bagi_Config
❏ YouTube: SGDC Project
❏ WhatsApp: wa.me/6282252655313
❏ Mwehehehehe :)
*━━━━━━━━━━━━━━━━━━━━━*
*╭═══════════════════╮*
❍ *Total Pengguna ${bname}* ❍
❏ ~> ${reg} User

❍ *Hitung Mundur Menuju Ramadhan* ❍
❏ ~> ${rmd}

❍ *Group Chat ${bname}* ❍
❏ ~> ${gc}

❍ *Performa ${bname} Saat Ini* ❍
❏ ~> ${ping}
*╰═══════════════════╯*
*━━━━━━━━━━━━━━━━━━━━━*
${readMore}
*┏━━━━━━━━━━━━━━━━━━━┓*
*┃                         ${bname}*
*┃╭═════════════════╮*
*┃║ Name :          ${name}*
*┃║ Date :             ${week}, ${date}*
*┃║ Time :            ${time}*
*┃║ Uptime :         ${uptime}*
*┃║ Version :        ${vers}*
*┃║ MultiPrefix :「 ${_p} 」*
*┃╰═════════════════╯*
*┃                       TEXT MAKER*
*┃╭═════════════════╮*
*┃║ ${_p}sand*  _Teks_
*┃║ ${_p}neon*  _Teks_
*┃║ ${_p}zuan*  _Teks_
*┃║ ${_p}burn*  _Teks_
*┃║ ${_p}wolf*  _Teks_
*┃║ ${_p}candy*  _Teks_
*┃║ ${_p}smoke*  _Teks_
*┃║ ${_p}shine*  _Teks_
*┃║ ${_p}metall*  _Teks_
*┃║ ${_p}graffiti*  _Teks_
*┃║ ${_p}candle*  _Teks_
*┃║ ${_p}naruto*  _Teks_
*┃║ ${_p}paper*  _Teks_
*┃║ ${_p}dark*  _Teks_
*┃║ ${_p}coffe*  _Teks_
*┃║ ${_p}coffe2*  _Teks_
*┃║ ${_p}matrix*  _Teks_
*┃║ ${_p}silverbutton*  _Teks_
*┃║ ${_p}goldbutton*  _Teks_
*┃║ ${_p}quotemaker*  _Teks_
*┃║ ${_p}8bit*  _Text|Text_
*┃║ ${_p}glitch*  _Text|Text_
*┃║ ${_p}wanted*  _Text|Text_
*┃║ ${_p}photooxy*  _Effect|Text_
*┃║ ${_p}qrcode*  _Teks_
*┃║ ${_p}style*  _Teks_
*┃║ ${_p}tahta*  _Teks_
*┃║ ${_p}tahta2*  _Teks_
*┃║ ${_p}sgdc*  _Teks_
*┃║ ${_p}nulis*  _Teks_
*┃║ ${_p}nulis2*  _Teks_
*┃║ ${_p}nulis3*  _Teks_
*┃║ ${_p}nulis4*  _Teks_
*┃╰═════════════════╯*
*┃                           ISLAMI*
*┃╭═════════════════╮*
*┃║ ${_p}quran*
*┃║ ${_p}ayatkursi*
*┃║ ${_p}doawirid*
*┃║ ${_p}doatahlil*
*┃║ ${_p}doaharian*
*┃║ ${_p}niatsholat*
*┃║ ${_p}bacaansholat*
*┃║ ${_p}asmaulhusna*
*┃║ ${_p}quotemuslim*
*┃║ ${_p}getsurah*  _Nomor Surah_
*┃║ ${_p}jadwalsholat*  _Daerah_
*┃║ ${_p}kisahnabi*  _Nama Nabi_
*┃║ ${_p}hadist*  _Perawi|Nomor_
*┃╰═════════════════╯*
*┃                          STICKER*
*┃╭═════════════════╮*
*┃║ ${_p}ttp*  _Teks_
*┃║ ${_p}ttp2*  _Teks_
*┃║ ${_p}ttp3*  _Teks_
*┃║ ${_p}attp*  _Teks_
*┃║ ${_p}attp2*  _Teks_
*┃║ ${_p}semoji*  _Emoji_
*┃║ ${_p}snobg*  _Image/Reply_ (error)
*┃║ ${_p}sgif2*  _Image/Reply_ (error)
*┃║ ${_p}sticgif*  _Image/Reply_ (error)
*┃║ ${_p}sticker*  _Image/Reply_
*┃║ ${_p}stimg*  _Reply Sticker_ (error)
*┃╰═════════════════╯*
*┃                    STICKER EMOJI*
*┃╭═════════════════╮*
*┃║ ${_p}emo lg* | _Emoji_
*┃║ ${_p}emo htc* | _Emoji_
*┃║ ${_p}emo apple* | _Emoji_
*┃║ ${_p}emo twitter* | _Emoji_
*┃║ ${_p}emo google* | _Emoji_
*┃║ ${_p}emo mozilla* | _Emoji_
*┃║ ${_p}emo whatsapp* | _Emoji_
*┃║ ${_p}emo microsoft* | _Emoji_
*┃║ ${_p}emo samsung* | _Emoji_
*┃║ ${_p}emo facebook* | _Emoji_
*┃║ ${_p}emo joypixels* | _Emoji_
*┃║ ${_p}emo openmoji* | _Emoji_
*┃║ ${_p}emo emojidex* | _Emoji_
*┃║ ${_p}semoji*  _Emoji_  (random)
*┃╰═════════════════╯*
*┃                  RANDOM IMAGE*
*┃╭═════════════════╮*
*┃║ ${_p}cecan*
*┃║ ${_p}cogan*
*┃║ ${_p}meme* (error)
*┃║ ${_p}darkjoke*
*┃║ ${_p}randomexo*
*┃║ ${_p}randombts*
*┃║ ${_p}randomcum*
*┃║ ${_p}randomfeet*
*┃║ ${_p}randomloli*
*┃║ ${_p}randomtits*
*┃║ ${_p}randomneko*
*┃║ ${_p}randonhusbu*
*┃║ ${_p}randomkanna*
*┃║ ${_p}randomshota*
*┃║ ${_p}randomwaifu*
*┃║ ${_p}randomsagiri*
*┃║ ${_p}randomshinobu*
*┃║ ${_p}randomhentai*
*┃║ ${_p}gimage*  _Teks_
*┃║ ${_p}pinterest*  _Teks_
*┃║ ${_p}randompict*  _Teks_
*┃╰═════════════════╯*
*┃                            STALK*
*┃╭═════════════════╮*
*┃║ ${_p}igstalk*  _Username_
*┃║ ${_p}githubstalk*  _Username_
*┃║ ${_p}twitterstalk*  _Username_
*┃║ ${_p}tiktokstalk*  _Username_ (error)
*┃╰═════════════════╯*
*┃                            SPAM*
*┃╭═════════════════╮*
*┃║ ${_p}spam*  _@user|Teks_
*┃║ ${_p}santet*  _@user|Teks_
*┃║ ${_p}santet2*  _@user|Teks_
*┃║ ${_p}spaming*  _628xxx|Teks_
*┃║ ${_p}spamsms*  _08xxx|Jmlh_
*┃║ ${_p}call*  _8xxxx_
*┃╰═════════════════╯*
*┃                            GROUP*
*┃╭═════════════════╮*
*┃║ ${_p}tagall*
*┃║ ${_p}tagall2*
*┃║ ${_p}grup*  _open/close_
*┃║ ${_p}add*  _628xxxx_
*┃║ ${_p}promote*  _@user_
*┃║ ${_p}demote*  _@user_
*┃║ ${_p}kick*  _@user_
*┃║ ${_p}oadd*  _628xxxx_
*┃║ ${_p}opromote*  _@user_
*┃║ ${_p}odemote*  _@user_
*┃║ ${_p}okick*  _@user_
*┃║ ${_p}getpp*  _@user_
*┃║ ${_p}rptag*  _@user_
*┃║ ${_p}hidetag*  _Teks_
*┃║ ${_p}ohidetag*  _Teks_
*┃║ ${_p}fitnah*  _Teks @user Teks_
*┃╰═════════════════╯*
*┃                            ANIME*
*┃╭═════════════════╮*
*┃║ ${_p}anime husbu*
*┃║ ${_p}anime neko*
*┃║ ${_p}anime waifu*
*┃║ ${_p}anime random*
*┃╰═════════════════╯*
*┃                         ANIME 18+*
*┃╭═════════════════╮*
*┃║ ${_p}cum*
*┃║ ${_p}feet*
*┃║ ${_p}loli*
*┃║ ${_p}tits*
*┃║ ${_p}neko*
*┃║ ${_p}husbu*
*┃║ ${_p}kanna*
*┃║ ${_p}shota*
*┃║ ${_p}waifu*
*┃║ ${_p}sagiri*
*┃║ ${_p}shinobu*
*┃║ ${_p}hentai*
*┃╰═════════════════╯*
*┃                           NSFW*
*┃╭═════════════════╮*
*┃║ ${_p}nsfw blowjob*
*┃║ ${_p}nsfw neko*
*┃║ ${_p}nsfw loli*
*┃║ ${_p}nsfw waifu*
*┃║ ${_p}nsfw trap*
*┃║ ${_p}nsfw random*
*┃╰═════════════════╯*
*┃                          OTHERS*
*┃╭═════════════════╮*
*┃║ ${_p}puitis*
*┃║ ${_p}iqtest*
*┃║ ${_p}ping*
*┃║ ${_p}bacotan*
*┃║ ${_p}donasi*
*┃║ ${_p}covid*
*┃║ ${_p}sfileup*
*┃║ ${_p}numpangbot*
*┃║ ${_p}stopnumpang*
*┃║ ${_p}getcode*
*┃║ ${_p}jadian*
*┃║ ${_p}infogempa*
*┃║ ${_p}nickepep*
*┃║ ${_p}grouplist*
*┃║ ${_p}linkgroup*
*┃║ ${_p}tebakgambar*
*┃║ ${_p}mark*  _Teks_
*┃║ ${_p}google*  _Teks_
*┃║ ${_p}sfile*  _Teks_
*┃║ ${_p}wiki*  _Teks_
*┃║ ${_p}kbbi*  _Teks_
*┃║ ${_p}lirik*  _Judul Lagu_
*┃║ ${_p}chord*  _Judul Lagu_
*┃║ ${_p}artimimpi*  _Teks_
*┃║ ${_p}kodepos*  _Kota_
*┃║ ${_p}cuaca*  _Daerah_
*┃║ ${_p}waktu*  _Daerah_
*┃║ ${_p}jadwaltv*  _Channel_
*┃║ ${_p}save*  _Nama_
*┃║ ${_p}ninja*  _Nama_
*┃║ ${_p}artinama*  _Nama_
*┃║ ${_p}afk*  _Reason_
*┃║ ${_p}math* _Mode_
*┃║ ${_p}say*  _Teks_
*┃║ ${_p}halah*  _Teks_
*┃║ ${_p}hilih*  _Teks_
*┃║ ${_p}huluh*  _Teks_
*┃║ ${_p}heleh*  _Teks_
*┃║ ${_p}holoh*  _Teks_
*┃║ ${_p}simi*  _Teks_
*┃║ ${_p}jhuruf*  _Teks_
*┃║ ${_p}repeat*  _Teks_
*┃║ ${_p}teksbalik*  _Teks_
*┃║ ${_p}otakudesu*  _Teks_
*┃║ ${_p}dewabatch*  _Teks_
*┃║ ${_p}kusonime*  _Teks_
*┃║ ${_p}teksbalik*  _Teks_
*┃║ ${_p}tts*  _lang Text_
*┃║ ${_p}readmore*  _Text|Text_
*┃║ ${_p}maknajadian*  _Tgl|Bln|Thn_
*┃╰═════════════════╯*
*┃                     DOWNLOAD*
*┃╭═════════════════╮*
*┃║ ${_p}mediafire*  _Url_
*┃║ ${_p}igdl*  _Url_
*┃║ ${_p}fbdl*  _Url_
*┃║ ${_p}sfiledl*  _Url_
*┃║ ${_p}tiktokdl*  _Url_
*┃║ ${_p}ytmp4*  _Url_
*┃║ ${_p}ytmp3*  _Judul_
*┃║ ${_p}ytplay*  _Judul_  (error)
*┃╰═════════════════╯*
*┃                          TOOLS*
*┃╭═════════════════╮*
*┃║ ${_p}join*  _Url_
*┃║ ${_p}fetch*  _Url_
*┃║ ${_p}ssweb*  _Url_
*┃║ ${_p}bitly*  _Url_
*┃║ ${_p}cuttly*  _Url_
*┃║ ${_p}tinyurl*  _Url_
*┃║ ${_p}pastebin*  _Teks_
*┃║ ${_p}report*  _Teks_
*┃║ ${_p}base64*  _Teks_
*┃║ ${_p}decode64*  _Teks_
*┃║ ${_p}whois*  _IP Adress_
*┃║ ${_p}calc*  _Angka_
*┃║ ${_p}infonpm*  _Nama NPM_
*┃║ ${_p}fullhd*  _Image/Reply_
*┃╰═════════════════╯*
*┃                          OWNER*
*┃╭═════════════════╮*
*┃║ ${_p}ban*
*┃║ ${_p}unban*
*┃║ ${_p}reset*
*┃║ ${_p}restart*
*┃║ ${_p}clear*
*┃║ ${_p}mute*
*┃║ ${_p}unmute*
*┃║ ${_p}leave*
*┃║ ${_p}bc*  _Text_
*┃║ ${_p}bcgc*  _Text_
*┃║ ${_p}bcbot* _Text_
*┃║ ${_p}setbye*  _Text_
*┃║ ${_p}setwelcome*  _Text_
*┃║ ${_p}opromote*  _@user_
*┃║ ${_p}odemote*   _@user_
*┃║ ${_p}ohidetag*  _@user_
*┃║ ${_p}okick*  _@user_
*┃║ ${_p}bann*  _@user_
*┃║ ${_p}unbann*  _@user_
*┃║ ${_p}addprem*  _@user_
*┃║ ${_p}delprem*  _@user_
*┃║ ${_p}optionlist*
*┃║ ${_p}on*  _Option_
*┃║ ${_p}off*  _Option_
*┃╰═════════════════╯*
*┃                       ${bname}*
*┗━━━━━━━━━━━━━━━━━━━┛*

  ${desc} *${bname}@^${vers}*

`.trim()
    await conn.sendFile(m.chat, poto, 'SGDC-BOT.jpg', mn, m, false, { 
        contextInfo: { 
            mentionedJid: [kntl, own]
        }
    }) 
  conn.fakeReply(m.chat, 'Untuk Menu Gretongan, Ketik *!gretongmenu*', '0@s.whatsapp.net', '*MENU GRETONGAN SGDC-TEAM*')
  } catch (e) {
    conn.fakeReply(m.chat, '*TERJADI KESALAHAN PADA SAAT MEMUAT MENU!*', '0@s.whatsapp.net', '*MENU ERROR! SEGERA LAPORKAN KE OWNER!*')
    //throw e
   // conn.sendMessage('6282252655313@s.whatsapp.net', 'Menu Error\n' + util.format(e), MessageType.text)
  }
}
handler.command = /^(menu|help|start|helep)$/i

handler.fail = null


module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
