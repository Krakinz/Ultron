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
    if (!OpenBot.args[0] && isNaN(OpenBot.args[0])) {
      await OpenBot.sendMessage(wwChat.chat, {
        react: {
          text: "❌",
          key: wwChat.key,
        },
      });
      return wwChat.reply(
        `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${OpenBot.prefix}${finalname} Id_
> _get the Id from ${OpenBot.prefix}${finalname}chordlist command!_`
      );
    }

    var data = await OpenBot.axios.get(
      "http://app.chordindonesia.com/?json=get_post&id=" + OpenBot.args[0]
    );
    var clean = (data) => {
      var regex = /(<([^>]+)>)/gi;
      data = data.replace(/(<br?\s?\/>)/gi, " \n");
      return data.replace(regex, "");
    };
    var result = data.data;
    chordFound = "*• Chord Music Found*\n";
    chordFound += `*- Title:* ${result.post.title.replace(
      /[0-9]|[#&;]/gi,
      ""
    )}\n\n`;
    chordFound += clean(result.post.content);
    try {
      var кяуяєsi = await OpenBot.fetch(
        global.apiGet("https://wall.alphacoders.com/api2.0", "/get.php", {
          auth: "3e7756c85df54b78f934a284c11abe4e",
          method: "search",
          term: "random",
        })
      );
      var bson = await кяуяєsi.json();
      var bsoni =
        bson.wallpapers[Math.floor(Math.random() * bson.wallpapers.length)];
      await OpenBot.imagebutton(
        OpenBot,
        wwChat,
        `*🔖Here, ${finalname} for ${OpenBot.pushname || OpenBot.Tname}:* 
> ${chordFound}`,
        bsoni.url_image
      );
    } catch {
      await OpenBot.imagebutton(
        OpenBot,
        wwChat,
        `*🔖Here, ${finalname} for ${OpenBot.pushname || OpenBot.Tname}:* 
> ${chordFound}`,
        OpenBot.display
      );
    }
  } catch (error) {
    return OpenBot.handlerror(OpenBot, wwChat, error);
  }
};
