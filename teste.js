//npm install simple-db-json
//const sdbj = require('simple-db-json')
const sdbj = require('./index')
const db = new sdbj('sdbj', '\t')
const Default = require('./sdbj-default/index')


Default(db.info(), { prefix: {}, punishchannel: {}, images: {}, muteroles: {}, welcome: {}, ok: [] })

// console.log(db.all().set('canal', 'de qualidade e perfeição'))
// console.log(db.get('object').set('hospedagens', ["www.floureonhost.com", 'www.hostinger.com', 'www.premiumhosting.com.br']))
// console.log(db.has('object'))
// if (db.has('object').this == true) {
//     let hosts = db.get('object').get('hospedagens').this
//     hosts.push('www.hospedagemminecraft.com')
//     db.get('object').set('hospedagens', hosts)
// }
// console.log(db.remove('acerola'))
// console.log(db.get('object').remove('canais'))
// console.log()


