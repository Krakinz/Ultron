//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐎𝐩𝐞𝐧𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 OpenBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of OpenBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (OpenBot, wwChat, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  try {
    if (!OpenBot.quoted) {
      await OpenBot.sendMessage(wwChat.chat, {
        react: {
          text: "❌",
          key: wwChat.key,
        },
      });
      return wwChat.reply(
        `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${OpenBot.prefix}${finalname} reply to Image_`
      );
    }

    if (/image/.test(OpenBot.mime)) {
      random = Math.floor(Math.random() * 10000);
      media = await OpenBot.downloadAndSaveMediaMessage(OpenBot.quoted, random);
      OpenBot.exec(
        OpenBot.pathFFmpeg + ` -i ${media} ${random}.png`,
        async (error) => {
          if (error) {
            return OpenBot.reply(`*😺You:* ${
              OpenBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
            }\n*📢Id:* ${wwChat.chat}

*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
          }

          if (OpenBot.fs.existsSync(random + ".png")) {
            Found = random + ".png";
          } else if (OpenBot.fs.existsSync(random + ".png")) {
            Found = random + ".png";
          } else if (OpenBot.fs.existsSync(random + ".jpeg")) {
            Found = random + ".jpeg";
          } else if (OpenBot.fs.existsSync(random + ".webp")) {
            Found = random + ".webp";
          } else {
            await OpenBot.sendMessage(wwChat.chat, {
              react: {
                text: "❌",
                key: wwChat.key,
              },
            });
            return wwChat.reply(
              `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${OpenBot.prefix}${finalname} reply to Image_`
            );
          }

          return await OpenBot
            .sendMessage(
              wwChat.chat,
              {
                image: OpenBot.fs.readFileSync(Found),
                caption: `╭╔══『 𝐊𝐫𝐲𝐙𝐨𝐧𝐞® 』
│║⦁ *😺You:* ${OpenBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ *🎭ChatId:* ${wwChat.chat.split("@")[0]}
│║⦁ *📢Console:* ${OpenBot.ShowInfo.replace("http://", "")}
╰╚═══════⋑

*🔖Here, ${finalname} for ${OpenBot.pushname || OpenBot.Tname}:*`,
                footer: `*OpenBot™ bot By KRYKNZ*

_*💻HomePage:* ${OpenBot.ShowInfo}_
_*⛺HomeLog:* ${OpenBot.Showlogger}_`,
                mentions: [wwChat.sender],
                buttons: [
                  {
                    buttonId: `${OpenBot.prefix}Commands`,
                    buttonText: {
                      displayText: `${OpenBot.prefix}✈️Commands`,
                    },
                    type: 1,
                  },
                  {
                    buttonId: `${OpenBot.prefix}OpenBot`,
                    buttonText: { displayText: `${OpenBot.prefix}🛰️OpenBot` },
                    type: 1,
                  },
                ],
                headerType: 4,
              },
              {
                quoted: wwChat,
              }
            )
            .then(
              OpenBot.fs.unlinkSync(Found),
              OpenBot.fs.unlinkSync(random + ".png")
            );
        }
      );
    } else {
      await OpenBot.sendMessage(wwChat.chat, {
        react: {
          text: "❌",
          key: wwChat.key,
        },
      });
      return wwChat.reply(
        `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${OpenBot.prefix}${finalname} reply to Image_`
      );
    }
  } catch (error) {
    return OpenBot.handlerror(OpenBot, wwChat, error);
  }
};
