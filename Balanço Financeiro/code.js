function code(entries) {
    const value = entries.reduce((acc, entry) => {
        if(entry.type === 'CREDIT') {
            return acc + entry.value;
        } else {
            return acc - entry.value;
        }
    }
    , 0);
    return value;
}

module.exports = code