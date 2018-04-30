const moment = require('moment')
const momenttz = require('moment-timezone')
const timeZone = 'Asia/calcutta'


let now = () => {
  
  return moment().format('MMMM Do YYYY, h:mm:ss a');
}


//Exporting my now functio
module.exports = {
    now: now
   
  }