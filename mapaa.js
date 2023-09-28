//----- d) modo asincrónico con promises (sintaxis async await)..-----

/*1) Lea el archivo package.json y declare un objeto con el siguiente formato y datos:
let info = {
contenidoStr: (contenido del archivo leído en formato string),
contenidoObj: (contenido del archivo leído en formato objeto),
size: (tamaño en bytes del archivo)
}
2) Muestre por consola el objeto info luego de leer el archivo.
3) Guarde el objeto info en un archivo llamado info.txt dentro de la misma carpeta de
package.json.
4) Incluya el manejo de errores.
*/

const fs = require('fs')
const Info = require('./classInfo.js')

const readwriteAsincPromisesAsyncAwait = async() =>{
    try{
        let data = await fs.promises.readFile('package.json','utf-8')
        const contentStr = data.replace(/(\r\n|\n|\r)/gm, '')
        const contentObj = JSON.parse(contentStr)
        let stats = fs.statSync('./package.json'); //creo un objeto stats
        let size = stats.size //aca guardo la propiedad .size al objeto stats     
        let objectInfo = new Info(contentStr, contentObj, size)
        //2) Muestre por consola el objeto info luego de leer el archivo.
        console.log(objectInfo)
        await fs.promises.writeFile('info.txt', JSON.stringify(objectInfo), 'utf-8')
        console.log('La informacion ha sido pasada al archivo info.txt!!')
    }
    catch(err){
        console.log(err)
    }
}

console.log('Comienzo el programa')
readwriteAsincPromisesAsyncAwait ()
  
console.log('Esto esta despues del metodo readwriteAsincPromisesAsyncAwait')
