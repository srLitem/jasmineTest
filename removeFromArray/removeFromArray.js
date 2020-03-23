const removeFromArray = function(array, ...args) {
    let result = [];
    
    array.forEach(element => {
        if(!args.includes(element)){
            result.push(element)
        }
    });

    return result;
}

module.exports = removeFromArray
