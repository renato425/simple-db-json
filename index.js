/*
                    Simple DB Json
              Criado por Guilherme Renato - Renatin
  Favor não repostar o mesmo repositório no github, npm ou yarn
            Uso livre para melhorias e uso comum
DB usada por mim para uso em bots discord meus ou em meus outros projetos.
Mais detalhes sobre a licensa? leia sobre a licensa MIT
Mais detalhes sobre o banco de dados? https://npmjs.com/package/simple-db-json
Mais informações sobre o código nos comentários
*/

//importando o FileSystem e criando variaveis para usar globalmente
let objectToReturn = {}
let objectInfo = {}
const fs = require('fs')
//class, obrigado a mesma, uso para exportar.
class main {
    constructor(name, spaces) {
        //inicia no index, para usar a db, obrigatório
        // console.log(name)
        if (name.endsWith('.json') && !fs.existsSync(name)) {
            fs.writeFileSync(name, '{}')
        } else if (!fs.existsSync(name + '.json')) {
            fs.writeFileSync(name + '.json', '{}')
        }
        if (name.endsWith('.json')) {
            objectInfo['name'] = name
        } else objectInfo['name'] = name + '.json'
        objectInfo['spaces'] = spaces
    }
    info() {
        return objectInfo
    }
    has(property) {
        //checa se existe alguma propriedade que o user informou
        let archive = fs.readFileSync(objectInfo['name']).toString()
        archive = JSON.parse(archive)
        if (archive[property]) {
            objectToReturn['this'] = true
            objectToReturn['has'] = has
            objectToReturn['set'] = set
            objectToReturn['get'] = get
            objectToReturn['all'] = archive
            objectToReturn['remove'] = remove
            objectInfo['function'] = property
            return objectToReturn
        } else return false
    }
    all() {
        //retorna todas as informações do json
        let archive = fs.readFileSync(objectInfo['name']).toString()
        archive = JSON.parse(archive)
        objectToReturn['this'] = archive
        objectToReturn['has'] = has
        objectToReturn['set'] = set
        objectToReturn['get'] = get
        objectToReturn['remove'] = remove
        return objectToReturn
    }
    get(property) {
        //retorna o valor de uma propriedade selecionada
        let archive = fs.readFileSync(objectInfo['name']).toString()
        archive = JSON.parse(archive)
        if (archive[property]) {
            objectToReturn['this'] = archive[property]
            objectToReturn['has'] = has
            objectToReturn['set'] = set
            objectToReturn['get'] = get
            objectToReturn['all'] = archive
            objectToReturn['remove'] = remove
            objectInfo['function'] = property
            return objectToReturn
        } else return null
    }
    set(property, data) {
        //seta um valor em uma propriedade ou na db principal
        let archive = fs.readFileSync(objectInfo['name']).toString()
        archive = JSON.parse(archive)
        archive[property] = data
        try {
            fs.writeFileSync(objectInfo['name'], JSON.stringify(archive, null, objectInfo['spaces']))
            objectToReturn['this'] = archive
            objectToReturn['has'] = has
            objectToReturn['set'] = set
            objectToReturn['get'] = get
            objectToReturn['remove'] = remove
            objectInfo['function'] = property
            if (objectToReturn) return objectToReturn
            else return false
        } catch (e) {
            console.log(e)
        }
    }
    remove(property) {
        let archive = fs.readFileSync(objectInfo['name']).toString()
        archive = JSON.parse(archive)
        delete archive[property]
        fs.writeFileSync(objectInfo['name'], JSON.stringify(archive, null, objectInfo['spaces']))
        objectToReturn['this'] = archive
        objectToReturn['has'] = has
        objectToReturn['set'] = set
        objectToReturn['get'] = get
        objectToReturn['remove'] = remove
        objectToReturn['all'] = JSON.parse(fs.readFileSync(objectInfo['name']).toString())
        objectInfo['function'] = property
        if (objectToReturn) return objectToReturn
        else return false
    }
} 

//funções, a diferença é que podem ser usadas novamente, no retorno
function remove(property) {
    let archive = fs.readFileSync(objectInfo['name']).toString()
    archive = JSON.parse(archive)
    if (objectInfo.function) {
        delete archive[objectInfo.function][property]
    } else delete archive[property]
    // delete archive[property]
    fs.writeFileSync(objectInfo['name'], JSON.stringify(archive, null, objectInfo['spaces']))
    objectToReturn['this'] = archive
    objectToReturn['has'] = has
    objectToReturn['set'] = set
    objectToReturn['get'] = get
    objectToReturn['all'] = JSON.parse(fs.readFileSync(objectInfo['name']).toString())
    objectToReturn['remove'] = remove
    objectInfo['function'] = property
    if (objectToReturn) return objectToReturn
    else return false
}
function has(property) {
    if (objectToReturn['this'][property]) {
        objectToReturn['this'] = true
        objectToReturn['has'] = has
        objectToReturn['set'] = set
        objectToReturn['get'] = get
        objectToReturn['remove'] = remove
        objectToReturn['all'] = JSON.parse(fs.readFileSync(objectInfo['name']).toString())
        return objectToReturn
    } else return false
}
function get(property) {
    if (objectToReturn['this'][property]) {
        objectToReturn['this'] = objectToReturn['this'][property]
        objectToReturn['has'] = has
        objectToReturn['get'] = get
        objectToReturn['set'] = set
        objectToReturn['remove'] = remove
        objectToReturn['all'] = JSON.parse(fs.readFileSync(objectInfo['name']).toString())
        return objectToReturn
    } else return false
}
function set(property, data) {
    let archive = fs.readFileSync(objectInfo['name']).toString()
    archive = JSON.parse(archive)
    if (typeof objectToReturn['this'] !== 'object') throw new TypeError('Função não executada! String detectada!')
    if (objectInfo.function) {
    const newObject = Object()
    for (const i in objectToReturn['this']) {
        newObject[i] = objectToReturn['this'][i]
    }
    newObject[property] = data
    archive[objectInfo.function] = newObject
    } else {
        objectToReturn['this'][property] = data
        archive = objectToReturn['this']
    }
    try {
        fs.writeFileSync(objectInfo['name'], JSON.stringify(archive, null, objectInfo['spaces']))
        objectToReturn['this'] = objectToReturn['this']
        objectToReturn['has'] = has
        objectToReturn['set'] = set
        objectToReturn['get'] = get
        objectToReturn['remove'] = remove
        objectToReturn['all'] = JSON.parse(fs.readFileSync(objectInfo['name']).toString())
        return objectToReturn
    } catch (e) {
        console.log(e)
    }
}

module.exports = main