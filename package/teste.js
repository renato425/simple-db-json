const SDBJ = require('simple-db-json')
const db = new SDBJ('db', '\t')

console.log(db.all().set('canal', 'de qualaidade e perfeição'))
console.log(db.get('object').set('hospedagens', ['www.floureonhost.com', 'www.hostinger.com', 'www.premiumhosting.com.br']))
console.log(db.has('object').this)
if (db.has('object').this == true) {
  let hosts = db.get('object').get('hospedagens').this
  hosts.push('www.hospedagemminecraft.com')
  console.log(db.get('object').set('hospedagens', hosts))
}
console.log(db.get('object').remove('hospedagens'))
