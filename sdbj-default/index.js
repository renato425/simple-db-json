const fs = require('fs')

    function main(info, defaults) {
        try {
            // let archive = fs.readFileSync(info.name).toString()
            if (fs.existsSync(info.name)) {
                let archive = fs.readFileSync(info.name)
                if (archive == '{}') {
                    let dataToSave = JSON.stringify(defaults, null, info.spaces)
                    fs.writeFileSync(info.name, dataToSave)
                }
            } else throw new TypeError('Arquivo não encontrado!')
        } catch(e) {
            throw new TypeError(e)
        }
    }

module.exports = main