const reverseString = function(string) {
    let array = string.split('');
    array = array.reverse();
    
    return array.join('');
}

module.exports = reverseString
