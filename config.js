
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Zimbabwe";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "263 78 539 6010";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0hDWms2ZXFaZ0lmNjN1VHBQQXZaMy92NE9EVVhjMUNxcVplT2xJTFpsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGRibGtpaDNpOXVJaytGTjRMMy9QUml5R3pNN0EzczJJcU9vSnVoczh4OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSVlGRnI5VlE2NE40WlhBZW9mbXJkK1k2dTdibjN1Q3JZcEVlc2xGblZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLdmEwWGtGZ20zc1pTTnB5UlQ5anRyWlpNMnVwYkg0ZkNRT0VBV1QwVjNFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9Ld1BTbmdnc09rb3VLMHZDNzFaczlLV0hvdFFMNXNUZXQxTi9EK0hubW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdiUEg5Y0gzTUEzVDE3TllPakNEY0l2V0R0ekgycTlOZjFVRTltL09iR009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0pXS3pBYmt2V1ZBbStDREdQWVI5TEs5SlFkWTFOQ0MrZUgwd2dBV2NFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjYzcDIvMndBL29GOFo1N2p4VGtHbGVBOE4yYU9MYlpSS0ZsVHRLS3dWQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtYNS9XSzVQU2I5dlVldUc5ekROKzRqVFAzajU5SFE1WUdxMmhicnNheDF0VitmcmxHZkI5dnJzYUhUNjR4QktxWEo4amwxMi9sWFhwYkdFVFgwbWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTksImFkdlNlY3JldEtleSI6Im9VTGpCU1daVFd1OHVJeFY5SktCenZ3OWtJa0prUno2ZE4zWVAxSXhpbTQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzg1Mzk2MDEwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijc4MzdFQTNERjE1MDc2Qzc2OTI1NUI2NEVCRjMzMjlEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI1MTU4NTN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im93OW01Wi1SVGNtUnZMb1BFdkhubWciLCJwaG9uZUlkIjoiODRhNjRkNDAtYmZkNy00NTBmLWIwOGItY2JiNDBiMzE2NWYyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9TZ0F0bVFzUXU1Z21NR281ZlNXZmNjdjAyTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoVENyK0lSTEZkWG1ERXA0KzR2WXNuV2thdWs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiN0s2TThMWVMiLCJtZSI6eyJpZCI6IjI2Mzc4NTM5NjAxMDozN0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJESiBERUxCT1kgQU5JRVkgTUlYVEFQRVMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xLVWxzd0VFUHFDcnJVR0dBa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImNKT1U1SHVYVUV5OEU4NFVLMGtNcWtFSzF2cjJnbkM1d1NWWk1SaEZMbUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ijk1eDRUVmhJdjduN055MktWSlFsKzBneUlKakFVWS9OQ2drOTZHc0tjNWtZOGsrb1pOWUR1U29lMUtlRm11MWtsTVZlYnZZR2lQTVZ0QWlSaXRWSEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJCaUlJNkt5d1FnTDIyVnV6akZFM2dFNlkxRTNlMnFnZzNnMjc0ZDdwcWJyR1UrSjlQQ1gxblAxMVowK2puMXU0UzdLdkZnMjl4bXB3azd4VkNxNytoZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc4NTM5NjAxMDozN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYQ1RsT1I3bDFCTXZCUE9GQ3RKREtwQkN0YjY5b0p3dWNFbFdURVlSUzVnIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNTE1ODQ4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFFTCJ9"





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR01QRE1sSzgwcHE2akNLbDN4L0FOQ0lYWERrN0pRMEMxbUkxVTlnOGVXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2dQbkJrSysxQ2cwaVJCWFZJbUZ6N2tzSHJIQ09aaTVXZHNSYTZFWnNVcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDT0EyTzJJTVMxeERrRzRmOVdsZWlaT1VIbnNqVms0Y0xET1ZCOWVoS1hJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHZzNjUGpUbEF5OVUySW1qNXcxOW5EWjFwT3pqWnJwWTYvdk8ydU54b3hnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlIc0NpaDRONnM0eWhTemUwK3Npc2NUcytqbGNaRk03b3FvbFhyTHZRRTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlnOWJNREJadVRyWFhYNFQza0N3NDlVQUFLMysrRm1aNmUrQnlMcCs4MjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0g4U2hldE9FbTgvaTQzTDRyRFVPbE1MM3FiVEwrdGxKSlcvSzgzbFhtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTzZ1WmtISEJYWkVYTzB4TkttR1g2TkhnR3puZVJLbWJtRFdLaVlUYjhXMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtNdlRlMXN0WWZHMG1aSGd0V2NCTXpYV3dxWk1uVlEvRnlRTmRtT2tIMzQ3WHlLdGgzVStNYUk0anF3Mi83Si8xakkrMXV1ZTNQWmVlNzJ3U1F2ZUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIzLCJhZHZTZWNyZXRLZXkiOiJETzVDNHRwdFdPWXJ3eFRORk1vVTMyWTArMm5FN29TVjNvNXRaMWRFY044PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJYZm5zQmxFVFFEcUo4dDAwaF8yWkdnIiwicGhvbmVJZCI6ImFhMjkyMDM2LTRkMDgtNGRmNi1hMDlhLTY5YWEzYzhkMzg0MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyK0FmTzFCZE9GSTkxMnlMdGcyWTRiLzRJeGs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzJJWXN4UEJMbmVVYTYybXJ6YlZNSkRWbzJZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhaVFFYTENUIiwibWUiOnsiaWQiOiIyNjM3ODUzOTYwMTA6MjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiREogREVMQk9ZIEFOSUVZIE1JWFRBUEVTIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMR1Vsc3dFRUwzM2tyVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjSk9VNUh1WFVFeThFODRVSzBrTXFrRUsxdnIyZ25DNXdTVlpNUmhGTG1BPSIsImFjY291bnRTaWduYXR1cmUiOiJ5N3ZBVlFraXZmRU9VMFVnMVhWTjhsTTVQQmJYTEJJZXNaNGU5eVZLRGZxMTErT0c5U2V2VWpSbm1wTmUyL0JTQno4dVczNmpBaFp2TVgwYXpjdEFDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOGE5bzBnT1l4M0tBTDUxb0kweUZkRm04YU5jUU1PeWtXT2FNWFZoTWVzVU14Y21vMWMxcllvUy8vMUNkL1BNUzFzQ0RqTG9ZNjNKY3JiTVozcTArQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3ODUzOTYwMTA6MjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWENUbE9SN2wxQk12QlBPRkN0SkRLcEJDdGI2OW9Kd3VjRWxXVEVZUlM1ZyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjA3MjAxMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBRUsifQ==" //



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By Dj Delboy Aniey*",
  author: process.env.PACK_AUTHER || "Delboy Aniey",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Dj Delboy Aniey",
  ownername: process.env.OWNER_NAME || "Dj Delboy Aniey",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
