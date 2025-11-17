function passValidation(password, passLength = 12, uppercase = false, lowercase = false, number = false, specialChar = false) {
  // let strength = 0;
  if (!password?.length >= passLength) {
    // strength += 1;
    return false
  }
  if (lowercase) {
    if (!/[a-z]/.test(password) && lowercase) {
      // strength += 1;
      return false
    }
  }
  if (uppercase) {
    if (!/[A-Z]/.test(password) && uppercase) {
      // strength += 1;
      return false
    }
  }
  if (number) {
    if (!/[0-9]/.test(password) && number) {
      // strength += 1;
      return false
    }
  }
  if (specialChar) {
    if (!/[^a-zA-Z0-9]/.test(password) && specialChar) {
      // strength += 1;
      return false
    }
  }
  return true;
}

export default passValidation;