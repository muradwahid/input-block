export const getPassLength = (password) => {
  let strength = 0;
  if (password.length >= 6) {
    strength += 1;
  }
  // if (/[a-z]/.test(password)) {
  //   strength += 1;
  // }
  if (/[A-Z]/.test(password)) {
    strength += 1;
  }
  if (/[0-9]/.test(password)) {
    strength += 1;
  }
  if (/[^a-zA-Z0-9]/.test(password)) {
    strength += 1;
  }
  return strength;
}

export const isPass = (type,value) => { 
  return type === 'password' && value
}