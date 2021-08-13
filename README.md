---
description: Iniciando com SimpleDBJson
---

# Introdução

O SimpleDBJson \(ou SDBJ\) foi criado com o objetivo de ajudar devs iniciantes a usarem um banco de dados em JSON.

Usando o SDBJ, Você pode facilmente usar um banco de dados em JSON em quaisquer dos seus projetos... onde queremos fazer atualizações de uso em nossa biblioteca! \(colaborações são bem vindas!\)

## Exemplos

Exemplos simples de uso do SDBJ

#### Gerando um objeto salvo e setando dentro dele

```text
const SDBJ = require('simple-db-json')
const db = new SDBJ('db', '\t')

db.get('object').set('content', 0)
```

#### Sabendo se existe um conteúdo e editando ele:

```text
if(db.get('object').has('content').this == true) {
    let number = db.get('object').get('content').this
    db.get('object').set('content', number + 500)    
}
```

Existem várias formas de usar o SDBJ! Essa documentação foi criada para dar exemplos aos devs e para saber como funcionam os métodos!

