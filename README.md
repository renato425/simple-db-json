![](https://cdn.discordapp.com/attachments/861275525041618946/875790513113022504/banner.png)
# Simple DB Json
Simples e leve banco de dados em JSON para NodeJS

[Documentação](http://sdbj.epizy.com)

[SDBJ-Default](https://npmjs.com/package/sdbj-default)
# Instalação
```
npm install simple-db-json
```

### Instalando o SDBJ-Default
**Depois de instalar o SDBJ:**
```
npm install sdbj-default
```

**Antes de instalar o SDBJ:**
```
npm install simple-db-json sdbj-default
```
# Uso
## Iniciando
```js
const sdbj = require('simple-db-json')
const db = new sdbj('nome do arquivo', 'espaços do json (valor recomendado => \t)')
```

Lembrando que a biblioteca ainda está em versão BETA e usa a forma síncrona. Mais opções de uso em breve.

***AVISO: Todo o método utilizado pelo sdbj, retorna outros métodos para sua utilização***

Retorno:
Key | Tipo | Descrição 
----|------|-----------
this | indefinido... pode ser uma string, ou um objeto, ou um array ou um boolean | Retorna o valor pedido, `has` por exemplo retorna boolean, agora `get` retorna o valor salvo
has | function | Função has do sdbj
get | function | Função get do sdbj
set | function | Função set do sdbj
remove | function | Função remove do sdbj
all | object | Retorna todo o conteúdo dentro do JSON como um objeto.

## Setando uma chave
```js
db.set('property_name', 'property_content')
```
A chave `property_name` é uma string... podemos dizer que é o nome do valor

## Verificando pra saber se existe tal chave.
```js
db.has('property_name')
```
A chave `property_name` é uma string... a chave no qual vai ser verificada...

## Retornando todo o JSON como objeto
```js
db.all()
```
Retorna o JSON como objeto... igual ao objeto do AVISO acima

## Coletando uma chave
```js
db.get('property_name')
```
A chave `property_name` é uma string... onde vai conter o valor retornado.

## Removendo uma chave
```js
db.remove('property_name')
```

A chave `property_name` é uma string... onde vai ter a chave para deletar do JSON

## Gerando as informações
```js
db.info()
```

Utilizado no package **sdbj-default** para encontrar o JSON e setar o objeto.

```js
//Utilize no sdbj-default!
//npm install sdbj-default
const sdbj = require('simple-db-json')
const db = new sdbj('sdbj', '\t')
const Default = require('sdbj-default')

Default(db.info(), {images: {}, infos: []})
```

# Utilizando

Você vai poder criar objetos e arrays!

* Exemplo 1:
```js
db.set('objeto1', {
    feijão: 'com batata doce', 
    arroz: 'com farofa!'
})
```

* Exemplo 2:
```js
db.get('objects').set('objeto5', {
    olha: 'um objeto!',
    muito: 'legal! :)'
})
```

# Experimente o SDBJ-Server!

Um banco de dados. Em "nuvem", tratado como JSON.
Saiba mais [aqui!](https://github.com/renato425/sdbj-server)
