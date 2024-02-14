async function getValue(client, key) {
    return await client.get(key)
}

async function setValue(client, key, value) {
    return await client.set(key, value)
}

async function setValueWithExp(client, key, value, exp) {
    return await client.set(key, value, { 'EX': exp })
}

async function remove(client, key) {
    return await client.del(key)
}


module.exports = {
    getValue,
    setValue,
    setValueWithExp,
    remove,
}