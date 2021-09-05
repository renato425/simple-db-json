---
description: Informações sobre o package oficial do SDBJ!
---

# SDBJ-Default

O SDBJ Default foi criado com o objetivo de ajudar os devs que sentiam um pouco prejudicados ao usar o get com um novo projeto.

Com o **SDBJ-Default,** você pode facilmente criar uma base do JSON!

Instalando: `npm install sdbj-default`

Exemplo:

```text
const sdbj = require('simple-db-json')
const db = new sdbj('db','\t')
const Default = require('sdbj-default')

Default(db.info(), { users: {}, servers: {} })
//Você também pode fazer um objeto com base no DB criado!
Default({ name: 'db.json', spaces: '\t' }, { users: {}, servers: {} })
```

JSON:

```text
{
    "users": {},
    "servers": {}
}
```

Caso o JSON estiver vazio \(ou seja, só com `{}`\), ele vai escrever!

