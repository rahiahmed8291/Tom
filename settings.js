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

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU0zQm9lNFlwbjRBZVRuR2ZiNFllS0QvbktOdTZRR3ZMQmo0b25rdDNtcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSDk0aGdqd2lTbVkvRnIzQURJRVdKY2wzR0J5dTV6SjBrVFRSdEpBdGpsND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFQ2xsMkt1RlVSTDNyaUFBR0czYnlNUDJHTms5Z3ZDUFduNHFkaE5vRFZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0MFQvS1JNSzNEYTBFRHZCOTZOUC9EUUVERnZmWC9zM0dvTlRJUTFyb2lnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9FODVGTklSZlhWaUF1cWhMVUYvRFRHVUtHbVB2cGJsTVZ2Y1RUaU9Pa0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFEVlpJclNTQk50SXN4SitWRFZEd2dxUmllQlRWN2FuRU1aK1UydTZ4aDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUFDQis2eXQ5VEVib1g5YzJvTlhxTXRnSko3OXB0UHFZb2lCdkpsT3RtTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmdXMEl5aWhySWtrSExWTkVadjhOcWZ0aVozdzlReWhyelBUWHNtV1ZuMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZlZFhBTVcrbEIrcXhNM1dEVStCV1p4MDJmOVNmdFh0TWtxNUk2U1N3cGlFVWZyZXNGSWd5SVlma3FzTnVKc2Y5SDViOTlSa3JwdWhRMnR5KzlKT2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMyLCJhZHZTZWNyZXRLZXkiOiJ1NDVEZVV2WStEK1Y4S2twVWxyc3VyWDJaeFlvRzc0M25wTElOd0pGei9NPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTY3MjU2MjczM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiQTVFNkEwMTU5RDBCMDI4M0ZBNzIzOTY1QTI5RDM2N0UiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NzcxOTgxN30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1NjcyNTYyNzMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiJBNTRCRUJBQTQ5MDYzQTM3RURFNDFBMUY2NENFQUI3MyIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY3NzE5ODE3fV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjIsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjI0OU1aUlBEIiwibWUiOnsiaWQiOiIyNTU2NzI1NjI3MzM6MjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiaWFtZGFuIiwibGlkIjoiNjk1NTc0OTg3MDM5NTY6MjdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNObjNtdHNERVBtRzljb0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ1c1U3RnM4TFdTQjdCdS8yczRFUGJ5UTcyRlZ1STFhWkpuQXVYUjBMdGlRPSIsImFjY291bnRTaWduYXR1cmUiOiJWQm90WGJhWE1jQ0dmK2ZsQzBjWjU0UHVYUU5xckpkWkJXSTl6ZTZVV0RVakFMREZtNDlRVmhnQ2p3U0VVS1JSQ08rVlFTM1VVWnpuRGM4UitIZGtBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT2Fwc0lnWk5nSFFzZkVwRXBVS2ZSR01mVzI2SVByZ1hSNVl0VElPUmg1ZmlLNEd4TkptaDFubWZlZXdzd2FHK0hZdTk0UkNvVEl3NjVSM2VPSWltaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI2OTU1NzQ5ODcwMzk1NjoyN0BsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYnJGT3hiUEMxa2dld2J2OXJPQkQyOGtPOWhWYmlOV21TWndMbDBkQzdZayJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUJRZ04ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY3NzE5ODE2LCJsYXN0UHJvcEhhc2giOiJubTNCYiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR1U0In0=' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'DC' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '255672562733' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'xia' 

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
