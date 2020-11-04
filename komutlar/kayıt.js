const Discord = require('discord.js');//Merdin

exports.run = async (client, message, args) => {//Merdin
//Merdin
let kayityetkilimerdin = '707712453353406568' // KAYIT YETKİLİSİ İD //
let vermerdin = '707712453286559763' // VERİLECEK ROL ID 1 //
let almerdin = '707712453286559762' // ALINACAK ROL ID//
let tagmerdin = '⨝' //DEĞİŞTİRİLECEK İSMİN ÖNÜNE GELEN
//Merdin
  if(!message.member.roles.has(kayityetkilimerdin)) //Merdin
  if(!message.member.hasPermission("ADMINISTRATOR"))//Merdin
  return message.channel.send(`Bu Komutu Sadece Ayarlanmış Kayıt Sorumluları Kullanabilir.`);//Merdin
  let member = message.mentions.members.first()//Merdin
  let isim = args.slice(1).join(" | ")//merdin
  if (!member) return message.channel.send('**Bir Üye Etiketlemelisin**')//Merdin
  if (!isim) return message.channel.send('**Bir İsim Yazmalısın **')//Merdin
  //merdin
  setTimeout(function(){//Merdin
  member.setNickname(`${tagmerdin}${isim}`)//Merdin
  },500)//Merdin
  setTimeout(function(){//Merdin
  member.addRole(vermerdin)//Merdin
  },500)//merdin
  setTimeout(function(){//Merdin
  member.removeRole(almerdin)//Merdin
  },500)//merdin
  //merdin
  const emoji = client.emojis.find(emoji => emoji.name === "");//Merdin
 let embed = new Discord.RichEmbed()//Merdin
 //Merdin

}; 

exports.conf = { //merdin
  enabled: true, //merdin
  guildOnly: true, //merdin
  aliases: ['oyuncu','o'], //merdin
  permLevel: 0
}
exports.help = { //merdin
  name: 'k',//merdin
  description: "kayıt etme komutu.",//merdin
  usage: 'k <yeni nick>'//merdin
}