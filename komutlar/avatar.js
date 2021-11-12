const Discord = require('discord.js');
exports.run = (client, message, args) => { 
let mention = message.mentions.users.first();
let sender = "";
if (message.channel.guild.member(message.author).nickname == null) {
  sender = message.author.username;
} else {
  sender = message.channel.guild.member(message.author).nickname;
}
if (mention != null || mention != undefined) {
  var name = mention.username + "'s ";
  if (mention.username.endsWith("s")) {
    name = mention.username + "' ";
  }
  const avatarEmbedOther = new Discord.MessageEmbed()
  .setAuthor(mention.username, mention.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
  .setColor('RED')
  .setImage(mention.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
  message.channel.send(avatarEmbedOther);
  return;
} else {
  const avatarEmbedYou = new Discord.MessageEmbed()
  .setAuthor(sender,message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
  .setColor('RED')
    .setImage(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())
  message.channel.send(avatarEmbedYou);
  return;
} 
message.channel.send("Render Hatası Yada Bilinmeyen Bir Hata Oldu.");
} 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatarım'],
    kategori: 'kullanıcı',
  permLevel: 0
};
exports.help = {
  name: 'avatar',
  isim: 'Avatar',
  süre: 'Yok',
  description: 'Avatarınızı Gösterir Veya Birini Etiketlerseniz Kişinin avatarını gösterir.',
  usage: 'avatar <@kullanıcı>'
};