("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
const moment = require(`moment-timezone`);
const Welcome = require(`../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/🍃𝖒𝖔𝖓𝖌𝖔/setwelcome`);
const group_participants = async (update, ӄ𝖚𝖓𝖆𝖎) => {
  let 𝖕𝖋𝖕𝖀𝖘𝖊𝖗;
  let GrpMETA;
  let userName;
  try {
    GrpMETA = await ӄ𝖚𝖓𝖆𝖎.groupMetadata(update.id);
    userName = await ӄ𝖚𝖓𝖆𝖎.getName(update.participants[0]);
    𝖕𝖋𝖕𝖀𝖘𝖊𝖗 = await ӄ𝖚𝖓𝖆𝖎.profilePictureUrl(update.participants[0], "image");
  } catch {
    𝖕𝖋𝖕𝖀𝖘𝖊𝖗 = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊_𝖕𝖋𝖕𝖀𝖘𝖊𝖗.png`;
    GrpMETA = "";
    userName = "";
  }
  `|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
  await Welcome.findOne(
    {
      ID: update.id,
    },
    async (𝕰𝖗𝖗𝖔𝖗, userWel) => {
      if (𝕰𝖗𝖗𝖔𝖗) return console.log(𝕰𝖗𝖗𝖔𝖗);
      if (!userWel) return;
      if (update.action == `add`) {
        return await ӄ𝖚𝖓𝖆𝖎
          .sendMessage(update.id, {
            contextInfo: { mentionedJid: [update.participants[0]] },
            image: { url: 𝖕𝖋𝖕𝖀𝖘𝖊𝖗 },
            caption: `*━━━━『 🥞𝐖𝐞𝐥𝐜𝐨𝐦𝐞🥞 』━━━━* 

╔══「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐏𝐫𝐨𝐭𝐨® 」
║ *💡 ɴᴀᴍᴇ: ${userName || "No_Name"}
║ *🎐 ɢʀᴏᴜᴘ:* ${GrpMETA.subject || ""}
║ *🍀 ᴍᴀᴅᴇ:* ${moment(`${GrpMETA.creation}` * 1000)
              .tz(`Asia/Kolkata`)
              .format(`DD/MM/YYYY HH:mm:ss`)}
║ *🎍 ɴᴜᴍ ᴏꜰ ᴘᴀʀᴛɪᴄɪᴘᴀɴᴛꜱ:* ${update.participants.length}
╚═══════╝


*━━━━『 🍯𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐍𝐨𝐭𝐞🍯 』━━━━* 
${userWel.message}`,
            footer: "*⦓ ⒸѶ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 ⦔*\n_ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™_",
            buttons: [
              {
                buttonId: prefix + "help",
                buttonText: { displayText: prefix + "help" },
                type: 1,
              },
              {
                buttonId: prefix + "rules",
                buttonText: { displayText: prefix + "rules" },
                type: 1,
              },
            ],
            headerType: 4,
          })
          .catch((e) => console.log(e));
      }
    }
  );
};
module.exports = {
  Vgrpns: group_participants,
};
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
