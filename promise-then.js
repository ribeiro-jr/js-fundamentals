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
  }, 2000)
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

const getUserAsync = getUser()

getUserAsync
  .then((data) => {
    return getTelephoneByUserIdAsync(data.id)
      .then((telephoneData) => {
        return {
          id: data.id,
          name: data.name,
          telefone: telephoneData
        }
      })
  })
  .then((data) => {
    return getAddressByUserId(data.id)
      .then((addressData) => {
        return {
          id: data.id,
          name: data.name,
          telefone: data.telefone,
          address: addressData
        }
      })
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log('error: ', err))