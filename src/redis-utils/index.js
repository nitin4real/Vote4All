const redis = require("redis")
const client = redis.createClient({ url: 'redis://localhost:6379' })

function setUpRedis(){
    client.connect()
}

const {
    getValue: getter,
    setValue: setter,
    setValueWithExp: expSetter,
    remove: remover
} = require('./redisCmds')

async function getValue(key) {
    return await getter(client, key)
}

async function setValue(key, value) {
    return await setter(client, key, value)
}

async function setValueWithExp(key, value, exp) {
    return await expSetter(client, key, value, exp)
}

async function remove(key){
    return await remover(client,key)
}

module.exports = {
    getValue,
    setValue,
    setValueWithExp,
    setUpRedis,
    remove
}