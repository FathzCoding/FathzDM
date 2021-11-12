const Discord = require('discord.js');


exports.run = (client, message, args) => {

if (!message.guild) {
const ozelmesajuyari = new Discord.MessageEmbed()
.setColor(0x2488E7)
.setTimestamp()
.setAuthor(message.author.username, message.author.avatarURL)
.addField('Hey Sen ', 'Merhaba')
return message.author.sendEmbed(ozelmesajuyari); }
if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`Bu komutu kullanabilmek için "\`Kanalları Yönet\`" yetkisine sahip olmalısın.`);
let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Birşey Yazmalısınız');

message.delete();

console.log(`Duyuru: "${message.author.username}#${message.author.discriminator}" "${mesaj}"`);

const mesajat = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('' + mesaj + '')

message.client.users
.cache.forEach(users =>

users.send(mesajat)
)

message.channel.send(`✅ Mesaj basariyla gonderildi.`);

};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['duyurlaherkese'],
permLevel: 4
};

exports.help = {
name: 'duyurherkes',
description: 'İstediğiniz şeyi bota duyurtur.',
usage: 'duyuru [duyurmak istediğiniz şey]'
};