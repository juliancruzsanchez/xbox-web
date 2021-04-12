const xls = require("app-xbox-live");

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

async function run(params) {
const token = await xls.Token("kickbutt.js@gmail.com", "00677949Aa!");
const xl = new xls.Account(`XBL3.0 x=${token[1]};${token[0]}`);
xl.chat.inbox.get().then(console.log);
// xl.chat.message.get("2535460039058026", 100).then(console.log);

const friends = (await xl.me.profile.friends.get()).people
const xuidAssociations = friends.filterKeys(['xuid', 'displayName', 'displayPicRaw','presenceState','presenceDetails','isFavorite'])
}
run()

