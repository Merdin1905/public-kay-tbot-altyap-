const Discord = require("discord.js");//Merdin
const client = new Discord.Client();//Merdin
const ayarlar = require("./ayarlar.json");//Merdin
client.queue = new Map();//Merdin
const fs = require("fs");//Merdin
const db = require("quick.db");//Merdin
const moment = require("moment");//Merdin
require("./util/eventLoader")(client);//Merdin
//Merdin
client.on('guildMemberAdd', async member => {//Merdin
  //Merdin
  let tag = await db.fetch(`tag_${member.guild.id}`);//Merdin
  let tagyazi;//Merdin
  if (tag == null) tagyazi = member.setNickname(`${member.user.username}`)//Merdin
  else tagyazi = member.setNickname(`${tag} | ${member.user.username}`)//Merdin
});//Merdin
var prefix = ayarlar.prefix;//Merdin
//Merdin
const log = message => {//Merdin
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);//Merdin
};//Merdin
//Merdin
client.commands = new Discord.Collection();//Merdin
client.aliases = new Discord.Collection();//Merdin
fs.readdir("./komutlar/", (err, files) => {//Merdin
  if (err) console.error(err);//Merdin
  files.forEach(f => {//Merdin
    let props = require(`./komutlar/${f}`);//Merdin
    log(`Yüklenen komut: ${props.help.name}.`);//Merdin
    client.commands.set(props.help.name, props);//Merdin
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);//Merdin
    });//Merdin
  });//Merdin
});//Merdin
//Merdin
/////////////////////// KAYIT KOMUTLARI/////////////////////
//Merdin//Merdin//Merdinv
client.on("guildMemberAdd", (member, message) => {//Merdin//Merdin
  if (member.guild.id !== "707712453286559755") return; // SUNUCU İD //v//Merdin//Merdin
  let aylartoplam = {//Merdin//Merdin//Merdin//Merdin//Merdin
    "01": "Ocak",//Merdin
    "02": "Şubat",//Merdin//Merdin//Merdin//Merdin
    "03": "Mart",//Merdin//Merdin//Merdin
    "04": "Nisan",//Merdin//Merdin//Merdin
    "05": "Mayıs",//Merdin//Merdin//Merdin//Merdin//Merdin
    "06": "Haziran",//Merdin//Merdin//Merdin
    "07": "Temmuz",//Merdin//Merdin//Merdin
    "08": "Ağustos",//Merdin//Merdin//Merdin//Merdin
    "09": "Eylül",//Merdin//Merdin//Merdin
    "10": "Ekim",//Merdin//Merdin//Merdin
    "11": "Kasım",//Merdin//Merdin//Merdin//Merdin
    "12": "Aralık"//Merdin//Merdin//Merdin//Merdin//Merdin
  };//Merdin//Merdin//Merdin
  let aylar = aylartoplam;//Merdin//Merdin
  let user = client.users.get(member.id);//Merdin//Merdin//Merdin
  require("moment-duration-format");//Merdinvv
  let eskiNick = member.user.username;//Merdin//Merdin
  const id = "710922703170830467"; //-----------------------//Merdin//Merdin------ KANAL ID Merdin //-----------------
  const channel = member.guild.channels.get(id);
  const kurulus = new Date().getTime() - user.createdAt.getTime();//Merdin
  const gün = moment.duration(kurulus).format("D");//Merdin
  var kontrol;//Merdin
  if (gün < 7) kontrol = "FAKE ÜYE!";//Merdin
  if (gün > 7) kontrol = "Güvenilir Kullanıcı!";//Merdin
  channel.send(//Merdin
    `Hoşgeldin ${member} seninle ${//Merdin
    member.guild.members.size
    } kişiyiz!  \n\n  Kaydının yapılması için sesli odaya gelip ses vermen gerekli. \n\n  Hesap Kuruluş Zamanı: ${moment(//Merdin
      user.createdAt//Merdin
    ).format("DD")} ${aylar[moment(user.createdAt).format("MM")]} ${moment(//Merdin
      user.createdAt//Merdin
    ).format(//Merdin
      "YYYY HH:mm:ss"//Merdin
    )}  \n\n Bu Kullanıcı: **${kontrol}**\n\n <@&707712453353406568> Rolündeki yetkililer seninle ilgilenecektir.`//Merdin
  );//Merdin
});//Merdin

////////////////////////////////////////////////////////Merdin////////////////////////////