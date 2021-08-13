---
description: Sabendo se existe uma propriedade com o mesmo nome
---

# has

Quer saber se existe tal objeto dentro do JSON? Só usar o método has!

```text
db.has('content').this //boolean
db.has('user').this //boolean
if(db.get('object').has('number').this == true) {
    let number = db.get('object').get('number').this //number
    db.get('object').set('number', number + 250)
}
```

### Diferença entre o get e o all

o [get](get.md) e o [all](all.md) tem diferenças para saber se existe alguma propriedade...

No caso do get. Ele irá retornar o valor da propriedade salva

Enquanto o has. Ele irá retornar boolean caso o valor seja encontrado!



Retorna: [Objeto de Retorno](../objeto-de-retorno/) ou Boolean

