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

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0twWjAwcGZ6WlhtVFd0UVVDQzlLZFE4RnNJZzhmbytpNXJYNVB2czlsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1pGTnlWQUttU251U3pVMU1ZQTgwU0RHTTVOaEQ5eGNqekNCSE1nK3lEcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTktza09YcnVrWFJpby9EVzhab0RkTmh0MXhxUVYzWjNBZTZKQUNseUY4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxYmg0N2ZleE5BcE5TQmNiSmg0SUdzY0ZCWkZVQWppYnZpSUphV3dSMmlNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllJaU5qSmJKU3NqeTlFVG05WUNxTFpJTGtvZnlLeHZnZ3FGZlhlTzFJMnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxPZlphTkw1WFkzNmtkL005bnZRTXdvL1VDSXErMVZmWXhoZHl1Y2ljR3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0ZPczdCTGFsOXFJTHdWYUtScGtFckhLSHRRRlJVeWYrYVhyVHR5TW0wMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianlva2wxUVYyeVZaT3hKQSt3ZFNzMHdOc1A5U3dnVmt3d1BEMDlHRGNXTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imh0RDMwWnBiUU5nWDRCNTg4cUo2UXZKTjdieVVyOGdRUWExTWpBTlJ0WWl2MjdxNlByTFc0SmlxWjRyei84NE5PVmlTdzJhY085TDJ3MCtUK2xtQUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzAsImFkdlNlY3JldEtleSI6Ikhtb3hVTlhlQkZYVUNzd0FCK2lDNjR1UFp2dW0wZUY3bXM0WXBWanAzdFU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiR0pGNEJaU0oiLCJtZSI6eyJpZCI6IjkyMzAwNTcyOTE3MToxN0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIxMTg4NDE1ODUxMzMzMzoxN0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lYUW1aTUdFS1hubHN3R0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkJneEpIZlpFSGw0T1dWc0JxRWQ5SWlWQUFlakt1eG1vRnovQlY5KzY3Qzg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjFIMVh4MU05Q2RsbUFaU3EvMHRBczBLM1NHVmcyYUFya05RamdYekNGRXg0Y2YrTFRGcFNPVjB4VFhGRWxuTVdYM0c3N3VQZ1pIMXNPenhXWDhjZ0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0M28yT1EyaXI4U0k2U3o2SmJXc0M4d05ObktWbS9ISy9KN0pSeEh4aDVnMzNWOUVPOHEvQ2hteVVNdmNhbEZmQUdadExOSGdjak04QkFnN1ZSOG9CUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIxMTg4NDE1ODUxMzMzMzoxN0BsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUVlNU1IzMlJCNWVEbGxiQWFoSGZTSWxRQUhveXJzWnFCYy93VmZmdXV3diJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSURRZ0MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzcwMzY5OTcyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVB2VyIsImxhc3RQcm9wSGFzaCI6IlBXazVCIn0=' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '233509977126' 

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
