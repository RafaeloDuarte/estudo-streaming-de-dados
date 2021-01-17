const fs = require('fs')

fs.readFile('./assets/vira-lata2.jpg', (erro, buffer) => {
    fs.writeFile('./assets/vira-lata4.jpg', buffer, (erro)=>{
        console.log('imagem processada')
    })
})