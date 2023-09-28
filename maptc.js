//----- c) modo asincrónico con promises (sintaxis then catch).-----

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

function readwriteAsincPromisesThenCatch (){
    return new Promise ((resolve, reject) => {
        fs.readFile('package.json', 'utf-8', (err, data) => {
            if (err) {
                reject(`Error en la operación asincrónica de lectura: ${err.message}`)
                return //Necesito poner un return sino sigue ejecutando
            }
            //Si no salta error, guardo los datos que necesito para mi objeto
            const contentStr = data.replace(/(\r\n|\n|\r)/gm, '')
            const contentObj = JSON.parse(contentStr)

            fs.stat('./package.json', (err, stats) => {
                if (err) {
                    reject(`Error al obtener las estadísticas del archivo: ${err.message}`)
                    return
                }
                const size = stats.size
                const objectInfo = new Info(contentStr, contentObj, size)
                
                console.log(objectInfo)

                fs.writeFile('info.txt', JSON.stringify(objectInfo), 'utf-8', (err) => {
                    if (err) {
                        reject(`Error en la operación asincrónica de escritura: ${err.message}`)
                        return;
                    }
                    resolve('La información ha sido escrita en el archivo info.txt')
                });
            });
        });
    });
}

console.log('Comienzo el programa')
readwriteAsincPromisesThenCatch ()
    .then(rta => console.log(rta))
    .catch(err => console.log(err))


console.log('Esto esta despues del metodo readwriteAsincPromisesThenCatch')

