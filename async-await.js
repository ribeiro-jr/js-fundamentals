/**
 * 0 - get user
 * 1 - get user telephone by user id
 * 2 - get address by user id
 */
const { read } = require('fs')
const util = require('util')
const getTelephoneByUserIdAsync = util.promisify(getTelephoneByUserId)

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: 1,
        name: 'Vanilson Ribeiro',
        age: 23
      })
    }, 1000)
  })
}

function getTelephoneByUserId(userId, callback) {
  setTimeout(() => {
    return callback(null, {
      number: 999999999,
      ddd: 244
    })
  }, 1000)
}

function getAddressByUserId(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        street: 'Rainha Ginga',
        number: 3
      })
    }, 2000)
  })
}

async function main() {
  console.time()
  try {
    const user = await getUser()
    const telephone = await getTelephoneByUserIdAsync(user.id)
    const address = await getAddressByUserId(user.id)

    console.log('user: ', user, '\ntelephone: ', telephone, '\naddress: ', address,);
  } catch (error) {
    console.error('error: ', error)
  }
  console.timeEnd()
}


main()
