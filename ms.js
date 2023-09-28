//----- a) modo sincrónico.-----


/*1) Lea el archivo package.json y declare un objeto con el siguiente formato y datos:
let info = {
contenidoStr: (contenido del archivo leído en formato string),
contenidoObj: (contenido del archivo leído en formato objeto),
size: (tamaño en bytes del archivo)
}
2) Muestre por consola el objeto info luego de leer el archivo.
3) Guarde el objeto info en un archivo llamado info.txt dentro de la misma carpeta de
package.json.
4) Incluiya el manejo de errores.
*/

const fs = require('fs')
const Info = require('./classInfo.js')


function readWriteSincronico(){
    
 
    try{
        let contentStr = fs.readFileSync('package.json','utf-8') //obtengo informacion en String
        contentStr = contentStr.replace(/(\r\n|\n|\r)/gm, '')
        let contentObj = JSON.parse(contentStr)
        let stats = fs.statSync('./package.json'); //creo un objeto stats
        let size = stats.size //aca guardo la propiedad .size al objeto stats     
        let objectInfo = new Info(contentStr, contentObj, size)
        //2) Muestre por consola el objeto info luego de leer el archivo.
        console.log(objectInfo)
        //3) Guarde el objeto info en un archivo llamado info.txt dentro de la misma carpeta de package.json.
        fs.writeFileSync('info.txt' , JSON.stringify(objectInfo), 'utf-8' ) // tengo que usar Stringify para convertirlo a JSON antes de pasarlo como DATA

    }
         //4) Incluiya el manejo de errores.
    catch(error){
        console.log(`Error en operación sincrónica de lectura / escritura: ${error.message}`)
    }
}

console.log("comienzo la prueba")
readWriteSincronico()
console.log("fin")