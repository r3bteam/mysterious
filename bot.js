  const Discord = require("discord.js");
const client = new Discord.Client({ fetchAllMembers: true });
const token = process.env.BOT_TOKEN;
const fs = require('fs');
const moment = require('moment');
const sql = require('sqlite');
const ms = require('ms');
var Canvas = require('canvas')
var jimp = require('jimp')
const pretty = require('pretty-ms');
const rn = require('random-number');
let done = {};
const child_process = require("child_process");
 var prefix = "!";



  client.on('ready' , function (){
var time = 7200000;
client.setInterval(function() {
    client.destroy();
        child_process.fork(__dirname + "/bot.js");
  }, time);
});

client.on('message', message =>{

    if(message.author.bot) return;
    if(!message.content == (prefix+'clear'))
if(!true) return;
  if (message.content.startsWith("!clear chat")) {
    var lmt = message.content.split(' ')[1]
    ,  hang = 0
    ,  max  = 0;

    if(!lmt) lmt = 200;
    if(typeof lmt !== 'number') return;
    if(lmt > 100){
        for(;lmt > 100;){
        lmt--;
        hang++;
        }
        }
     message.channel.fetchMessages({limite:lmt}).then(msgs=>{
     msgs.channel.bulkDelete(msgs);
     });
     if(hang > 100){
         hang = 100;
     }
        message.channel.fetchMessages({limite:hang}).then(msgs=>{
        message.channel.bulkDelete(msgs);
     });

    max= hang+lmt;
    message.reply(` **Done, i have delete ${max} messages!**.`).catch(()=>{
        message.reply(` **Sorry, i can only bulk delete messages that are under 14 days old**.`)
    });
    }
});

client.on("message", message => {
            var args = message.content.substring(prefix.length).split(" ");
  if (message.content.startsWith("!clear")) {
                if (!message.member.hasPermission("MANAGE_CHANNELS"))  return message.reply("**للأسف ليس لديك صلاحية `MANAGE_CHANNELS` Permission**");
if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**للأسف البوت يحتاج صلاحية`MANAGE_CHANNELS`**");
 if (!args[1]) {
                                let embed3 = new Discord.RichEmbed()
                                .setDescription("امسح <number>")
                                .setColor("RANDOM")
                                message.channel.sendEmbed(embed3);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let embed4 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("2000");
                                message.channel.sendEmbed(embed4) .then(msg => msg.delete(2000));
                            }
                          }
});


client.on("ready", function() {

  console.log("The bot is online and ready to be used");
  client.user.setActivity("Mysterious Server.", {type: "LISTENING"})
});
const adminprefix = "!";
const devs = ['450711003324350485', '154596804636311552'];


client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;

if (message.content.startsWith(adminprefix + 'ply')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else
  if (message.content === (adminprefix + "Percie")) {
  message.guild.leave();
} else
if (message.content.startsWith(adminprefix + 'wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else
if (message.content.startsWith(adminprefix + 'ls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : Done :>`)
return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else
if (message.content.startsWith(adminprefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
}
  if(message.content === adminprefix + "restart") {
    if (!devs.includes(message.author.id)) return;
        message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
      console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
      console.log(`⚠️ Bot restarting... ⚠️`);
      console.log("===============================================\n\n");
      client.destroy();
      child_process.fork(__dirname + "/bot.js");
      console.log(`Bot Successfully Restarted`);
  }

});










// ╱╱╱╱╱╱╱╱╭╮╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱╱╱╱┃┃╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━━┳━┳━━┫╰━┳━━┫╰━╮╭━━┳╮╭┳━╮╭━╯┣━━╮
//┃━━┫╭┫╭╮┃╭╮┃╭╮┃╭╮┃┃╭━┫╰╯┃╭╮┫╭╮┃━━┫
//┣━━┃┃┃╭╮┃┃┃┃╭╮┃┃┃┃┃╰━┫┃┃┃┃┃┃╰╯┣━━┃
//╰━━┻╯╰╯╰┻╯╰┻╯╰┻╯╰╯╰━━┻┻┻┻╯╰┻━━┻━━╯

  client.on('message', message => {

if(message.content.split(' ')[0] == '!srh'){
       if (message.author.bot) return;
     if(!message.channel.guild) return;

let args = message.content.split(' ').slice(1).join(' ');
let arg = message.content.split(' ').slice(2).join(' ');
if(!args) return message.reply ("**Mention A member please** :dove: ");
  if(!arg) return message.reply ("**Write A Message** :dove: ");




 var user = message.mentions.users.first();


        if(user === message.author) return;
          let em  = new Discord.RichEmbed()
.setAuthor("Sarahah", "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
.addField("◆ Msg : " , arg)

 .setThumbnail("https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
                 message.delete()
client.guilds.get(message.guild.id).members.get(user.id).sendEmbed(em)


 let embed = new Discord.RichEmbed()
 .setAuthor("Sarahah", "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
 .setDescription(':dove: شكرا لصراحتك')
 .setColor("10bbb3")
.setThumbnail("https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
  message.channel.sendEmbed(embed);
}
});


client.on('message', message => {

if(message.content.split(' ')[0] == '!srh1'){
       if (message.author.bot) return;
     if(!message.channel.guild) return;

let args = message.content.split(' ').slice(1).join(' ');
let arg = message.content.split(' ').slice(2).join(' ');
if(!args) return message.reply ("**Mention A member please** :dove: ");
  if(!arg) return message.reply ("**Write A Message** :dove: ");




 var user = message.mentions.users.first();


        if(user === message.author) return;
          let e  = new Discord.RichEmbed()
.setAuthor("Sarahah", "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
.addField("◆ Sent By :" , message.author.tag)
.addField("◆ Msg : " , arg)

 .setThumbnail("https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
    message.delete()
client.guilds.get(message.guild.id).members.get(user.id).sendEmbed(e)




 let embed = new Discord.RichEmbed()
 .setAuthor("Sarahah", "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
 .setDescription(':dove: شكرا لصراحتك')
 .setColor("10bbb3")
.setThumbnail("https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
  message.channel.sendEmbed(embed);
}
});



client.on('message', message => {

if(message.content.split(' ')[0] == '!sr7'){
       if (message.author.bot) return;
     if(!message.channel.guild) return;
                       if(user === message.author) return;
let args = message.content.split(' ').slice(1).join(' ');
let arg = message.content.split(' ').slice(2).join(' ');
if(!user) return message.reply ("**Mention A member please** :dove: ");
  if(!arg) return message.reply ("**Write A Message** :dove: ");



 var user = message.mentions.users.first();




const w = ['./img/sarahah.png'];
var Canvas = require('canvas')
var jimp = require('jimp')


        let Image = Canvas.Image,
            canvas = new Canvas(500, 500),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';

        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 500, 500);

})


                let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(20, 20) + ".png" : message.author.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.drawImage(ava, -100 , -100, 70, 70);





                        ctx.font = 'Bold 28px Arial ';
                        ctx.fontSize = '28px';
                        ctx.fillStyle = "#000000";
                        ctx.textAlign = "center";
                        ctx.fillText(arg, 242 , 201 );





            // when someone calls this command, it also adds 1 earlier at the same, but since this is fetching the previous value, we need to add 1 to the answer, even thought it will be updated
            // seconds after this.


    message.delete()
client.guilds.get(message.guild.id).members.get(user.id).sendFile(canvas.toBuffer())

     })
    })




 let embed = new Discord.RichEmbed()
 .setAuthor("Sarahah", "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
 .setDescription(':dove: شكرا لصراحتك')
 .setColor("10bbb3")
.setThumbnail("https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
  message.channel.sendEmbed(embed);
}
});



client.on('message', message => {
     if (message.content === "!sarahah") {
           if(!message.channel.guild) return message.reply('** This command only for servers**');
 const embed = new Discord.RichEmbed()
         .setDescription(`** 「:dove: | SARAHAH COMMANDS」**`)
         .addField("`-sr7`",
         "	لارسال صراحة بالصورة")
.addField("`!srh`",
         "لارسال صراحة بدون اسم")

.addField("`!srh1`",
         "لارسال صراحة باسم ")

         .addField("`مثال`",
         "**!srh @Moha Single Or Taken ?** ")



.setColor("10bbb3")
.setFooter(`Horror Players`)
message.channel.sendEmbed(embed);

    }
});

client.on('message', message => {
      if(message.content.startsWith ("!marry")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()

      if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply('ولد ما يصحلك الا حرمة وحدة كل مرة').catch(console.error);
       if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
        if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
              message.channel.send(`**${proposed}
 بدك تقبلي عرض الزواج من ${message.author}
 العرض لمدة 15 ثانية
 اكتب موافقة او لا** `)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{
    message.channel.send(`**${message.author} و ${proposed} الف الف مبروك الله يرزقكم الذرية الصالحة**`);
})
   .catch(collected => message.channel.send(`**السكوت علامة الرضا نقول مبروك ؟**`))

   const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{
   message.channel.send(`**${message.author} تم رفض عرضك**`);
})




  }
});

client.on('message', message => {
   if (message.content.startsWith ("!id")) {
       if(!message.channel.guild) return message.reply('** This command only for servers **');

               var mentionned = message.mentions.users.first();
    var mentionavatar;
      if(mentionned){
          var mentionavatar = mentionned;
      } else {
          var mentionavatar = message.author;

      }
      message.guild.fetchInvites()
       .then(invites =>{
 if(!invites.find(invite => invite.inviter.id === `${mentionavatar.id}`)) {
     let embed = new Discord.RichEmbed()
  .setColor(0xd3d0c4)
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("ID:", "**" + `${mentionavatar.id}` + "**", true)
  .addField("Create At:", "**" + `${mentionavatar.createdAt}` + "**", true)
  .addField("Invites:", `**0**` ,true)
     .setFooter(`Horror Players`)
      message.channel.sendEmbed(embed);
 }else{
   let embed = new Discord.RichEmbed()
  .setColor(0xd3d0c4)
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("ID:", "**" + `${mentionavatar.id}` + "**", true)
  .addField("Create At:", "**" + `${mentionavatar.createdAt}` + "**", true)

  .addField("Invites:", `**${invites.find(invite => invite.inviter.id === `${mentionavatar.id}`).uses}**` ,true)
    .setFooter(`Horror Players`)

  message.channel.sendEmbed(embed);
 }

       })
    }
});


	


client.on('message', message => {
   if (message.content.startsWith("الوان")) {
     if(!message.guild.roles.find("name","1")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","2")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","3")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","4")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","5")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","6")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","7")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","8")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","9")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","10")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","11")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","12")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","13")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","14")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","15")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","16")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","17")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","18")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","19")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","20")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","21")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","22")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","23")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","24")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","25")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
if(!message.channel.guild) return;
const w = ['./colors.png','./colors2.png'];
var Canvas = require('canvas')
var jimp = require('jimp')
     let Image = Canvas.Image,
            canvas = new Canvas(500, 200),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';

        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 500, 200);

})


                let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(20, 20) + ".png" : message.author.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.drawImage(ava, -100 , -100, 70, 70);

ctx.fillStyle = `${message.guild.roles.find("name","1").hexColor}`;
  ctx.fillRect(52, 68, 30, 30);

ctx.fillStyle = `${message.guild.roles.find("name","2").hexColor}`;
  ctx.fillRect(88, 68, 30, 30);

  ctx.fillStyle = `${message.guild.roles.find("name","3").hexColor}`;
  ctx.fillRect(124, 68, 30, 30);

ctx.fillStyle = `${message.guild.roles.find("name","4").hexColor}`;
  ctx.fillRect(160, 68, 30, 30);

  ctx.fillStyle = `${message.guild.roles.find("name","5").hexColor}`;
  ctx.fillRect(196, 68, 30, 30);

ctx.fillStyle = `${message.guild.roles.find("name","6").hexColor}`;
  ctx.fillRect(232, 68, 30, 30);

ctx.fillStyle = `${message.guild.roles.find("name","7").hexColor}`;
  ctx.fillRect(268, 68, 30, 30);

  ctx.fillStyle = `${message.guild.roles.find("name","8").hexColor}`;
  ctx.fillRect(304, 68, 30, 30);

ctx.fillStyle = `${message.guild.roles.find("name","9").hexColor}`;
  ctx.fillRect(340, 68, 30, 30);

  ctx.fillStyle = `${message.guild.roles.find("name","10").hexColor}`;
  ctx.fillRect(376, 68, 30, 30);

  ctx.fillStyle = `${message.guild.roles.find("name","11").hexColor}`;
  ctx.fillRect(412, 68, 30, 30);

ctx.fillStyle = `${message.guild.roles.find("name","12").hexColor}`;
  ctx.fillRect(52, 105, 30, 30);

  ctx.fillStyle = `${message.guild.roles.find("name","13").hexColor}`;
  ctx.fillRect(88, 105, 30, 30);

ctx.fillStyle = `${message.guild.roles.find("name","14").hexColor}`;
  ctx.fillRect(124, 105, 30, 30);

  ctx.fillStyle = `${message.guild.roles.find("name","15").hexColor}`;
  ctx.fillRect(160, 105, 30, 30);

  ctx.fillStyle = `${message.guild.roles.find("name","16").hexColor}`;
  ctx.fillRect(196, 105, 30, 30);

ctx.fillStyle = `${message.guild.roles.find("name","17").hexColor}`;
  ctx.fillRect(232, 105, 30, 30);

  ctx.fillStyle = `${message.guild.roles.find("name","18").hexColor}`;
  ctx.fillRect(268, 105, 30, 30);

ctx.fillStyle = `${message.guild.roles.find("name","19").hexColor}`;
  ctx.fillRect(304, 105, 30, 30);

  ctx.fillStyle = `${message.guild.roles.find("name","20").hexColor}`;
  ctx.fillRect(340, 105, 30, 30);

  ctx.fillStyle = `${message.guild.roles.find("name","21").hexColor}`;
  ctx.fillRect(376, 105, 30, 30);

ctx.fillStyle = `${message.guild.roles.find("name","22").hexColor}`;
  ctx.fillRect(412, 105, 30, 30);

  ctx.fillStyle = `${message.guild.roles.find("name","23").hexColor}`;
  ctx.fillRect(52, 142, 30, 30);

ctx.fillStyle = `${message.guild.roles.find("name","24").hexColor}`;
  ctx.fillRect(88, 142, 30, 30);

  ctx.fillStyle = `${message.guild.roles.find("name","25").hexColor}`;
  ctx.fillRect(124, 142, 30, 30);


 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("1", 67.5  , 88 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("2", 103.5  , 88 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("3", 139.5  , 88 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("4", 175.5  , 88 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("5", 211.5  , 88 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("6", 247.5  , 88 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("7", 283.5  , 88 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("8", 319.5  , 88 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("9", 355.5  , 88 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("10", 391.5  , 88 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("11", 427.5  , 88 );

   ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("12", 67.5  , 125 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("13", 103.5  , 125 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("14", 139.5  , 125 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("15", 175.5  , 125 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("16", 211.5  , 125 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("17", 247.5  , 125 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("18", 283.5  , 125 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("19", 319.5  , 125 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("20", 355.5  , 125 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("21", 391.5  , 125 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("22", 427.5  , 125 );

   ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("23", 67.5  , 162 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("24", 103.5  , 162 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("25", 139.5  , 162 );

message.channel.sendFile(canvas.toBuffer())


        })
    })

}

})


//colors----------------------------------------------------------------------------------------------------



    client.on('message', function(message) {
    if (message.content ===  '!ccolors'){
              if (!message.member.hasPermission("MANAGE_ROLES"))  return;

                         if(message.guild.roles.find("name","5")) return message.reply("You're Already Have Colors ! :art:");
                           if(message.guild.roles.find("name","10")) return message.reply("You're Already Have Colors ! :art:");
                             if(message.guild.roles.find("name","15")) return message.reply("You're Already Have Colors ! :art:");
                               if(message.guild.roles.find("name","20")) return message.reply("You're Already Have Colors ! :art:");
                                 if(message.guild.roles.find("name","25")) return message.reply("You're Already Have Colors ! :art:");
        if(!message.channel.guild) return message.reply('** This command only for servers **');


                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 26; x++){
            message.guild.createRole({name:x,
            color: "RANDOM"})
            }

          message.channel.send(":white_check_mark: | Working On Colors")


    }
});


  client.on("message", async message => {
    if(!message.channel.guild) return;

if(message.content.startsWith(prefix + 'invites')) {
var nul = 0
var guild = message.guild
await guild.fetchInvites()
    .then(invites => {
     invites.forEach(invite => {
        if (invite.inviter === message.author) {
             nul+=invite.uses
            }
        });
    });
  if (nul > 0) {
      console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
      var embed = new Discord.RichEmbed()
          .setColor("#000000")
            .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                  message.channel.send({ embed: embed });
              return;
            } else {
               var embed = new Discord.RichEmbed()
                .setColor("#000000")
                .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

               message.channel.send({ embed: embed });
                return;
            }
}
if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});





client.on('message', message => {
    if (message.content.startsWith("!dick")) {

        // pretty shitty command

        let dicksize = ["=", "==", "===", "====", "=====", "======", "=======", "========", "=========", "=========="];
        let dickuser = message.mentions.users.first();

        if (!dickuser) {
            return message.channel.send('You must mention someone!');
        }

        message.channel.send(`**${dickuser} Size: ** 8${dicksize[~~Math.floor(Math.random() * dicksize.length)]}D\nSized by **${message.author.tag}**`);

    }
});


 client.on('message', message => {
              if(!message.channel.guild) return;
    var prefix = "!";
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Dragon";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });

    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });


     client.on('message' , message => {
      var prefix = "!";
      if(message.author.bot) return;

      if(message.content.startsWith(prefix + "rolebc")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(1);

        if(!args[0]) {
          message.channel.send("قم بمنشنة الرتبة | !rolebc @everyone message")
            return;
        }
        if(!args[1]) {
          message.channel.send("قم بكتابة الرسالة | !rolebc @everyone message")
            return;
        }

          if(args[0] == "@everyone") {
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.memberCount} اعضاء`)
            message.guild.members.forEach(m => {
              m.send(
              "**" + "السيرفر :" + "\n" +
              `${message.guild.name}` + "\n" +
              "المرسل :" + "\n" +
              `${message.author.tag}` + "\n" +
              "الرسالة :" + "\n" +
              `${args[1]}` + "**"
              )
            })
            return;
          }

              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("لا توجد رتبة بهذا الاسم")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(
              "**" + "السيرفر :" + "\n" +
              `${message.guild.name}` + "\n" +
              "المرسل :" + "\n" +
              `${message.author.tag}` + "\n" +
              "الرسالة :" + "\n" +
              `${args[1]}` + "**"
              )
            })
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
        }
    });





client.on('message', message => {
  var prefix = "!";
if(message.content === prefix + "muteall") {
             if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
message.channel.overwritePermissions(message.guild.id, {
SEND_MESSAGES: false

}).then(() => {
    message.reply("**__تم تقفيل الشات__ :white_check_mark: **")

});
}



});
  client.on('message', message => {
    var prefix = "!";
if(message.content === prefix + "unmuteall") {
          if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
message.channel.overwritePermissions(message.guild.id, {
SEND_MESSAGES: true

}).then(() => {
    message.reply("**__تم فتح الشات__:white_check_mark:**")
});
  }



});













client.on('guildMemberAdd',async member => {
    const Canvas = require('canvas');
    const jimp = require('jimp');
    const w = ['./welcome.png'];
          let Image = Canvas.Image,
              canvas = new Canvas(800, 300),
              ctx = canvas.getContext('2d');
          ctx.patternQuality = 'bilinear';
          ctx.filter = 'bilinear';
          ctx.antialias = 'subpixel';
          ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
          ctx.shadowOffsetY = 2;
          ctx.shadowBlur = 2;
          ctx.stroke();
          ctx.beginPath();

          fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
              if (err) return console.log(err);
              let BG = Canvas.Image;
              let ground = new Image;
              ground.src = Background;
              ctx.drawImage(ground, 0, 0, 800, 300);

  })

                  let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                  jimp.read(url, (err, ava) => {
                      if (err) return console.log(err);
                      ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                   if (err) return console.log(err);

            ctx.font = '36px Arial';
            ctx.fontSize = '72px';
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "center";
            ctx.fillText(member.user.username, 545, 177);

            ctx.font = '16px Arial Bold';
            ctx.fontSize = '72px';
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "center";
            ctx.fillText(`${member.guild.memberCount} Members`, 580, 200);

            let Avatar = Canvas.Image;
            let ava = new Avatar;
            ava.src = buf;
            ctx.beginPath();
            ctx.arc(167.5, 144, 135.9, -100, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(ava, 33, 9, 270, 270);

            const c = client.channels.get("481876096766181379");
            c.sendFile(canvas.toBuffer());

  });
  });
  });


var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "Mysterious..")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find('name', 'mysterious');
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('made it till here!');
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "Mysterious..")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(3);
                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
 channel.send(`**invited by:**   ${Invite.inviter}`)
 }
            dat[Inv] = Invite.uses;
        })
    })
});







client.login(token);
