let axios = require('axios')
let fetch = require('node-fetch')
let handler = async (m, { text }) => {
let chat = global.DATABASE.data.chats[m.chat]
if (chat.simi) {
  let url = 'https://simsumi.herokuapp.com/api?text=${text}&lang=id'
  let res = await fetch(url)
  if (!/text|json/.test(res.headers.get('content-type'))) return conn.sendFile(m.chat, text, 'file', text, m)
  let txt = await res.buffer()
  try {
    txt = util.format(JSON.parse(txt+''))
  } catch (e) {
    txt = txt + ''
  } finally {
    m.reply(txt.slice(0, 65536) + '')
  }
  } else m.reply('*SIMI BELUM DIAKTIFKAN UNTUK CHAT INI!*')
}
  
  
  
  /*
 let res = await fetch(`https://simsumi.herokuapp.com/api?text=${text}&lang=id`)
  //let hh = `${res.data.result}`
 let json = await res.json()
conn.reply(m.chat, `${json.success}`, m)
 // let simi = pickRandom(global.simi)                         
  //conn.reply(m.chat, `${simi}`, m)
  
   } catch { 
   m.reply('_Simi Gatau Kamu Ngomong Apa :)_')
   }
 } else m.reply('*SIMI BELUM DIAKTIFKAN UNTUK CHAT INI!*')
}*/
                      
handler.customPrefix = /^! /
//handler.command = new RegExp
handler.command = /(?:)/i


handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.simi = [
'Apa kabar tod?',
'Hay ngenn(uh)',
'Hay',
'Kamu siapa?',
'Iya',
'Bukan',
'Apasi',
'Sehat?',
'Apaan',
'Apa',
'Y',
'G',
'Terus?',
'Ya terus?',
'Gk',
'Iy',
'Gk jales',
'_-',
'Wow',
'Dengan Siapa?',
'Halo halow',
'Hy',
'Hai',
'Halo?',
'P',
'P',
'Biasakan Salam!',
'Basi',
'Ihhh',
'Jangan',
'Hah??',
'Mksd',
'Maksud?',
'G paham',
'No Toxic!',
'No Call!!',
'Ndak bisa bahasa Engress',
'Bisa?',
'Gak bisa',
'Jawab dulu!',
'Namaku Kuhong,, Kamu siapa?',
'Salamnya mana?',
'Tok tok tokk',
'Assalamualaikum,, Gak jawab dosa loh',
'Ketik !help untuk mulai Bot',
'Ini Simsimi kak',
'Bot',
':v',
'Wkwkwkwk',
'Kenapa?',
'Awoakakakak',
'Gak nyambung',
'Aneh',
'Ajg',
'Stres',
'Hai Sayang',
'Sayang',
'syg',
'Lu',
'Lu kali!',
'Gay',
'Hai Gay!',
'Tolol',
'Kgk',
'Kemaren kemana aja?',
'Ahhhh',
'Enak?',
'*ARRGGGHHH!!!*',
'Kmu knp?',
'Gila',
'Lu gila y?',
'?',
'Jawab!',
'Hey Tayo',
'😂',
'👋',
'🤖💬',
'🙃',
'🗿',
'✔️',
'😎',
'🤣',
'😴',
'Doi ku mana?',
'Kamu pacar aku kan?',
'P cari Doi',
'😱',
'😭',
'😞',
'😑',
'🙄',
'😀',
'😄',
'😚',
'❤️',
'Mengsedih',
'Waras?',
'Tolong!',
'Cara ngewa gmn?',
'Woy',
'ini nih contoh anak anjing',
'Woe',
'Oe',
'Titik dua vi?',
'P = Pacar tau',
'F-',
'A+',
'Mantap',
'Woi',
'👏',
'👌',
'👍',
'👎',
'Bukan Premium jan sok Keras!',
'Member Baru jan sok Keras!',
'Jadi Manusia jan sok Keras!',
'Kon',
'Tau Anime?',
'Asu = Aku Sayang KamU',
'Ajg = Astagfirullah Jangan Gitu',
'Yahaha',
'cacat',
'Jadi Orang jan sok Keras!',
'!help',
'!menu',
'!start',
'tau',
'Gak tau?',
'Apa?',
'Apa apa?',
'Berani?',
'Halahh',
'Bacot',
'Bacot!',
'Bacot ajg!',
'Jan ngegas napa',
'Berisik',
'Jangan Chat',
'Nyari siapa?',
'Bye One?',
'Player WA jan sok keras!',
'Player gem buriq jan sok keras!',
'Kesel',
'Nyeselin ihh',
'Gitu amat',
'Kamu doi aku kan?',
'Chat aja',
'kamu mantan aku?',
'Emg kmu siapa? pacar aku?',
'Emg kmu cewek?',
'Emg kmu cowok?',
'Tanda Tanya?',
'Opo iki',
'!',
'Batre Sekarat',
'Oni Chan',
'Ahhh Yamete Kudasai!',
'*BAKKAAAAAA!!!*',
'Namamu?',
'Aku hebatkan?',
'Main yuk',
'Temenin chat dong',
'**********',
'SENSORED',
'Sering nonton bok*p ya',
'Ini siapa?',
'Kamu siapa? gak kenal!',
'Basi ajg',
'Banyak bacot lu',
'Udah ah',
'Belum',
'Ngakak',
'Rumah kamu dmn?',
'Enak aja!',
'Dhlah',
'Ayam Goyeng',
]
