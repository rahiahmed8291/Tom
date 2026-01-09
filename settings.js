//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0RNMTRHR0xGb0VQQU1sTFRJcmxMTUg4dk5INTltMDJTbDA2NmNrcllIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiODBjRUNwZ3AxMkZuTFh0UmFTS2ZxQ2tIZzdTZXFmS004YmVDbmR3aUVqZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2S3dGc1NHTE8zM2M1NUgrbnRGVDUyQ25QV0NiVUxaYkhmcjR2OXhBYW1vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXUk55VDFhZ0RiK2JKelhReDhZeG5pMGgxd0E2cm1yeE1XSlN6b0pKZHlJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVPaStQUC9lT1VrZmlYaWplOVAyL29uZWU4U3hRVW5Udm0wb01wQkhERUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlA3K0RUTUpObmZ6VG5zSUIrUnEydWIzSkZDMHAxTGVOQ1lvOU83bTBMRWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEFTdUtWa0xLZy9icDlsVnZSL0FsaE9oTk53Q1QzTlFEZHhkMWFRSkxFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2xsWGViVlAvYUZ2dlZ0QkRVNGdpVWpvNnVBRVNNbXQ4NmY1dFBCV3hpdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVnZ29Kc0M4WnVXdjEzZzZEdnpjWVVjVjk3UzJFdG41eWdlYytxVTkvWlVNcng0VlBVNXd0YjFNS2JyeGdBZXE2eDRLK2EyQTY4alZ1dUpjVUovckJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI1LCJhZHZTZWNyZXRLZXkiOiJBVHJxREh1LzB0TUV6QUU1WGV4bnU4VksyOWdWWGRKeWwwcmhYamVid3A0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MDc2MzkyNjMxMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQUNERTA3MTE4Q0U1MERCMjhFQjc2RTkzN0E5MTEwQkUiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2Nzk5NjIxMH1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJNM0tRUFdYSiIsIm1lIjp7ImlkIjoiMjYwNzYzOTI2MzExOjk0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjAzNTg3NjU3NDgyNjU6OTRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNQ043ZzBRbmZhRnl3WVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJiajhBZEx1MURCSnJIRGdsZFFRY2VRTXRvRm50SUV2NU9xazlQS2RaRlU4PSIsImFjY291bnRTaWduYXR1cmUiOiIzTkNJYWdHUytOc29lYmxLK29wNGVxRjgyTWFDY3NPNlZmeHVrZjNSS1J3cjZWbytkaW9NenAvcmt2VDNzZ0x5Syt2eW9RZDNoVzUwem1GM1JNTDRCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRENaTXozTS9SS3VuMmNBdmFUZTFYTlFRN2lmczhJdEdWMnZLcGl1TXN4QTNSL0pmcnVCZHYxYVpnMnROQlZlemcvdzFQSFpQS1ZBeVplcTRwVGhNQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMDM1ODc2NTc0ODI2NTo5NEBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVzQvQUhTN3RRd1NheHc0SlhVRUhIa0RMYUJaN1NCTCtUcXBQVHluV1JWUCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUNBZ1MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY3OTk2MjA0LCJsYXN0UHJvcEhhc2giOiIzZ1BVSmsiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUN4NiJ9' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'TRCBOT' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '260763926311' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'MR TRC' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Zambia';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "TRC" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
