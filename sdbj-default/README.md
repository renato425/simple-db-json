![](https://cdn.discordapp.com/attachments/861275525041618946/875790513113022504/banner.png)
# SDBJ-Default
Sete um JSON default para seu projeto SDBJ!

[Simple-DB-Json](https://npmjs.com/package/simple-db-json)

# Instalando
```
npm install sdbj-default
```

# Utilizando
```js
//Lembre-se de instalar o SDBJ! Usando "npm install simple-db-json"
const sdbj = require('simple-db-json')
const db = new sdbj('sdbj', '\t')
const Default = require('sdbj-default')

Default(db.info(), { users: {}, servers: {} })
```