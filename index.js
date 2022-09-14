/**
 * 0 - get user
 * 1 - get user telephone by user id
 * 2 - get address by user id
 */

function getUser(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      name: 'Vanilson Ribeiro',
      age: 23
    })
  }, 2000)
}

function getTelephoneByUserId(userId) {
  setTimeout(() => {
    return {
      number: 999999999,
      ddd: 244
    }
  }, 2000)
}

function getAddressByUserId(userId) {
  setTimeout(() => {
    return {
      street: 'Rainha Ginga',
      number: 3
    }
  }, 2000)
}

getUser((error, user) => {

  if (error) {
    console.log('can not get user data', error);
  }
  console.log('user: ', user)
})

// const telephone = getTelephoneByUserId(user.id)
// const address = getAddressByUserId(user.id)

// console.log('user: ', user, 'telephone: ', telephone, 'address: ', address);