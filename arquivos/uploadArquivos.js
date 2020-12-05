const fs = require('fs')

fs.readFile('./assets/vira-lata.jpg', (erro, buffer) => {
    console.log('imagem bufferizada')

    fs.writeFile('./assets/vira-lata2.jpg', buffer, erro => { console.log('imagem gravada com sucesso') })

})