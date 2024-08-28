import sum,* as  mod from './Module.js'
import axios from 'axios'

async function request(){
    const res=await axios.get('https://fakerapi.it/api/v1/places?_quantity=1')
    console.log(res.data)
}

request()

console.log(mod.person)
console.log(sum(4,5))

// item exported as default when imported using * syntax appears as default like above
// another workaround is given above


