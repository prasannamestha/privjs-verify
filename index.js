require('dotenv').config();
const axios = require('axios')
axios.defaults.timeout = 5000;

export const checkPrivJsAccess = (packageName) => {
  return axios.get(`https://api.privjs.com/packages/get/scoped/package?packageName=${packageName}`, {
    headers: {
      'Content-Type': 'application/json',
      'token': process.env.PRIVJS_TOKEN
    }
  }).then(() => true)
  .catch(() => false)
}

checkPrivJsAccess('@module-federation/nextjs-mf').then((d) => {
  console.log('Has access', d)
})
// console.log('HAS', hasAccess)
export default checkPrivJsAccess