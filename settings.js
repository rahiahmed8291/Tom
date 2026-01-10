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

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU5OckRzbFMzTnRFVlJqeU5nc1YvTXZPdVdiM2JER0RuY2NDaDFwak8wOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTFTNG1yVWdzNTlqZEY4OXo1Z25jcWdRNzMrbU5iaVVHOHFWSy80bWlrcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTy8yTzZWQ05vM1h5K2dGUXJqUW51aTY4dzRiYmR3UWd4R3dBTDJZVUhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOTytzWGdnL21KeWpvNFd0R0hHN1c2UXdCcEpZbkxHZVhmYzFCTUpNMHk4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9MUk1QSUZ4a01yWU0xYWNFU1JYZnloRHZKSXR4WmtndGpMWWhsaWJ4VTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQ2aEF4bUc0bTNFSEF1R0lSN3hiQ2tVZVZndUlaUFR3WjF1K2cycEdXM1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU0yRXZSNEVUWDJ5c1puOEJ3b0dJeVZDTUZmdkZFcjdXM2xscllXbHRYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTXJkWCtHK0w3UlhYeXU4V3VSeEVmSUZYb0h3bnVIRU44MlNoME9HM3hXST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpEeTl2SGFDRFhKNkxvajBDL21hcXIxMHdKNlM3NXJYSll6L0g5RWpzczE0bHBSckw3MTJhNm1nMWpJQjZEM2hKeE5PZVVQQUJ4K2dIb21TZ3NLbGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzIsImFkdlNlY3JldEtleSI6InU3a0grTFFac2tOQ2FMcjMyQUU4b2hCRGRLb3ZEQVRFTUxlOWdiRFRNWVU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiQVpZSjhEMTEiLCJtZSI6eyJpZCI6IjkyMzExMjcwOTA3NjozQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTA1NTM2NDU2NTE5ODI2OjNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKbmQyNjBGRUsra2g4c0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ1cWxnVUk0RFBsRm53cVl0TUw1WnhIbUN0VGs4dkEvRkJkZmdQU2c0NVM4PSIsImFjY291bnRTaWduYXR1cmUiOiJSTHBOZER4aTZnOXBFaVY0aUgwbnRyQ2x2NU92MDBWS1JpL1c4amI1UGltTGZiZktPdWgySjh1dEhmTjl4NWdIUnZuRFoyVWE0WFd2ZzJaSHVJL3FEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidjRhR0RvTVZKM2JiNlVJSnMxTTVCcmVvVS9nbGRNVGNjQkNwSHVUV1BrR1B1Uldnc2JlMTJUQ3grNjN6ZjJhbExkVndUZ0tjMnpzQ1JHOEw2SEVkaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxMDU1MzY0NTY1MTk4MjY6M0BsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYnFwWUZDT0F6NVJaOEttTFRDK1djUjVnclU1UEx3UHhRWFg0RDBvT09VdiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUJRZ1MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY4MDE4NDkzLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT1ViIn0=' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '923112709076' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Hector Manuel' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

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
