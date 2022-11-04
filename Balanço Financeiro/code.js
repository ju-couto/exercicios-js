function code(entries) {
    let value = 0
    entries.forEach(entry =>{
        if(entry.type == 'CREDIT'){
            value += entry.value
        } else {
            value -= entry.value
        }
    })
    return value
}

module.exports = code