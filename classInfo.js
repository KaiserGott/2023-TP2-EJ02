class Info {
    constructor(contenidoStr, contenidoObj, size) {
        this.contenidoStr = contenidoStr;
        this.contenidoObj = contenidoObj;
        this.size = size;
    }

    getSize(){
        return this.size
    }

}

module.exports = Info;