const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
exports.run = async (bot, msg, args) => {
//SOUL CASTLE
        const çekiliş = new Discord.MessageEmbed()
                .setColor('GOLD')
        .setFooter(`${msg.author.username} Başarıyla Çekiliş Komutunu Kullandı!`, msg.author.avatarURL)
        .setAuthor('Soul Castle çekiliş Botu Çekiliş Menüsü')
        .setThumbnail('https://cdn.discordapp.com/attachments/785205247274254357/786555718714523648/standard3.gif')
        .setDescription('🎉  Botu Davet Etmek İçin `-davet` yazabilirisiniz.',false)
        .addField('**__Çekliş Başlat__**', '🎉  `-çekiliş-başlat #kanal süre kazanan_sayısı Ödül` \nBelirtilen Kanalda Çekiliş Başlatırsınız',false )
        .addField('**__Çekiliş Yenile__**','🎉  `-çekiliş-yenile mesaj_id` \n Belirtilen İd deki Çekilişi Yeniler',true)
        .addField('**__Çekiliş Liste__**', '🎉  `-çekiliş-liste` \nSunucudaki Aktif Çekilişleri Listeler',true)
        .addField('**__Çekiliş Bitir__**', '🎉  `-çekiliş-bitir mesaj_id` \nBelirtilen İd deki Çekilişi Sonlandırır.',false)
        .addField('**__Bilgilendirme__**', '🎉  `-davet` | Botu Sununuya Davet Edersiniz \n <:partner:786555343730769960>  `-botbilgi` | Botun İslatistiklerini Görürsünüz \n <:partner:786555343730769960>  `-sunucu` | Sunucuya Özel Komutlar',true)
  
msg.channel.send(çekiliş)
    //SOUL CASTLE
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['çekiliş', 'giveawey'],
  kategori: 'yardım',
  permLevel: 0
};
exports.help = {
  name: 'çekiliş',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'çekiliş'
};//SOUL CASTLE