export const notiContent = {
  pass: 'Password must have 7 to 15 characters,least one numeric digit and a special character !!!',
  email: 'Email is invalid !!!',
  comparePass: "Those passwords didn't match."
}

export const validatePassword = (value) => { 
  let paswd =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
  return value.match(paswd) ? true : false
}

export const validateEmail = (value) => {
  let mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  return value.match(mailformat) ? true : false
}

