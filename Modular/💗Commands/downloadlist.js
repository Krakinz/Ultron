("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// ╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ νℓкуяє was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
ppath = require("path");
require("../../global.js");
psname = ppath.basename(__filename);
pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (νℓкуяє, vcнaт, update, store) => {
  await νℓкуяє.sendMessage(vcнaт.chat, {
    react: {
      text: "🔖",
      key: vcнaт.key,
    },
  });
  await νℓкуяє.imgB(
    νℓкуяє,
    vcнaт,
    `*🔖Here, ${pfname} For @${νℓкуяє.Tname || νℓкуяє.pushname}:*
*🤖Hello, I am Vlkyre User-Bot🤖*
> Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞: is a whatsapp userbot with automation,moderation,music,games and 100+ commands!
> My developers are working on my code.



┌『 *📥${pfname.toUpperCase()}📥* 』
│║⦁ ${νℓкуяє.prefix}yta
│║⦁ ${νℓкуяє.prefix}play
│║⦁ ${νℓкуяє.prefix}song
│║⦁ ${νℓкуяє.prefix}sing
│║⦁ ${νℓкуяє.prefix}ytmp3
│║⦁ ${νℓкуяє.prefix}music
│║⦁ ${νℓкуяє.prefix}ytplay
│║⦁ ${νℓкуяє.prefix}ytaudio
│║⦁ ${νℓкуяє.prefix}ytmusic
│║⦁ ${νℓкуяє.prefix}youtubemusic
│║⦁ 
│║⦁ ${νℓкуяє.prefix}ytv
│║⦁ ${νℓкуяє.prefix}watch
│║⦁ ${νℓкуяє.prefix}stream
│║⦁ ${νℓкуяє.prefix}ytmp4
│║⦁ ${νℓкуяє.prefix}video
│║⦁ ${νℓкуяє.prefix}ytwatch
│║⦁ ${νℓкуяє.prefix}ytvideo
│║⦁ ${νℓкуяє.prefix}youtubevideo
┕╚═══════⋑`,
    "./Gallery/magneum.png"
  );
};