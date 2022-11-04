function code(entries) {
    const approved = []
    entries.forEach(entry => {
        if (entry.nota >= 5) {
            approved.push(entry.nome)
        }
    })
   return approved

}

module.exports = code