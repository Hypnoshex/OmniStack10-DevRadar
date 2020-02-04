module.exports = function parse(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim())
}