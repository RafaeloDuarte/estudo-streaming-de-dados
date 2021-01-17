const fs = require('fs')

fs.createReadStream('./assets/vira-lata.jpg')
    .pipe(fs.createWriteStream('./assets/vira-lata-streaming.jpg'))
    .on('finish', () => console.log('imagem registrada via streaming de dados'))