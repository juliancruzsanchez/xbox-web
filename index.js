const xls = require("./api");
let token,xl;
Array.prototype.filterKeys = function (keys = []) {
  let retArray = []
  this.forEach(x => {
    const r = {}
    for (const [key, value] of Object.entries(x)) {
       keys.includes(key) ? r[key] = value : null
    }
    retArray.push(r)
  })
 return retArray
}
xls.Token("kickbutt.js@gmail.com", "00677949Aa!").then(x => {token = x; xl = new xls.Account(`XBL3.0 x=${token[1]};${token[0]}`);goTime()})

async function getAllMessages(xuid) {
return await xl.chat.message.get(xuid, 100)
}
async function goTime(params) {
 // console.log(token)
const friends = (await xl.me.profile.friends.get()).people
const xuidAssociations = friends.filterKeys(['xuid', 'displayName', 'displayPicRaw','presenceState','presenceDetails','isFavorite'])
xl.chat.inbox.get().then(console.log);
xl.chat.message.get("2535460039058026", 100)
}

