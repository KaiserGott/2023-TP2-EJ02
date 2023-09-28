//----- b) modo asincrónico con callbacks.-----

/*1) Lea el archivo package.json y declare un objeto con el siguiente formato y datos:
let info = {
contenidoStr: (contenido del archivo leído en formato string),
contenidoObj: (contenido del archivo leído en formato objeto),
size: (tamaño en bytes del archivo)
}
2) Muestre por consola el objeto info luego de leer el archivo.
3) Guarde el objeto info en un archivo llamado infob.txt dentro de la misma carpeta de
package.json.
4) Incluiya el manejo de errores.
*/

const fs = require('fs');
const Info = require('./classInfo.js');

function readWriteASincronico(){
    fs.readFile('package.json', 'utf-8', (err, datos) => {
        if (err) throw Error (`error en la operacion asincronica de lectura: ${err.message}`)
        let contentStr = datos.replace(/(\r\n|\n|\r)/gm, '')
        let contentObj = JSON.parse(contentStr)
        let stats = fs.statSync('./package.json'); //creo un objeto stats
        let size = stats.size //aca guardo la propiedad .size al objeto stats     
        let objectInfo = new Info(contentStr, contentObj, size)
        //2) Muestre por consola el objeto info luego de leer el archivo.
        console.log(objectInfo)
        //3) Guarde el objeto info en un archivo llamado infob.txt dentro de la misma carpeta de package.json.
        //Lo hago anidando otro callback
        fs.writeFile('infob.txt', JSON.stringify(objectInfo), 'utf-8', err => {
            if (err) throw Error (`error en la operacion asincronica de escritura: ${err.message}`)
            console.log('La informacion ha sido pasada al archivo infob.txt!!')
         })  
    })    
}


console.log('Comienzo el programa')
readWriteASincronico()
console.log('Esto esta despues del metodo readWriteASincronico')
