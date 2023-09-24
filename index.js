/*
1) Lea el archivo package.json y declare un objeto con el siguiente formato y datos:
let info = {
contenidoStr: (contenido del archivo leído en formato string),
contenidoObj: (contenido del archivo leído en formato objeto),
size: (tamaño en bytes del archivo)
}
2) Muestre por consola el objeto info luego de leer el archivo.
3) Guarde el objeto info en un archivo llamado info.txt dentro de la misma carpeta de
package.json.
4) Incluiya el manejo de errores.
Aclaraciones:
- Desarrollar la solución mediante el uso de cuatro scripts con los siguientes nombres (en
negrita), donde en cada uno de ellos la lectura y escritura de archivos se hará en:
 ms.js → modo sincrónico.
 mac.js → modo asincrónico con callbacks.
 maptc.js → modo asincrónico con promises (sintaxis then catch).
 mapaa.js → modo asincrónico con promises (sintaxis async await).
- Para deserializar un string con contenido JSON utilizar JSON.parse (convierte string en
object).
- Para serializar un objeto (convertirlo a string) y guardarlo en un archivo utilizar
JSON.stringify. considerando usar JSON.stringify(info, null, '\t') para preservar el formato de
representación del objeto en el archivo.
*/