import toastr from 'toastr'

function profileValidation (firstName, lastName, address, telephone) {
  if (firstName.length < 3 || firstName === '') {
    toastr.error('First name must be at least 3 characters long')
    return false
  }
  if (lastName.length < 3 || lastName === '') {
    toastr.error('Last name must be at least 3 characters long')
    return false
  }
  
  if (address.length < 8 || address === '') {
    toastr.error('Address must be at least 8 characters long')
    return false
  }
  if (telephone.length < 8 || telephone === '') {
    toastr.error('Telephone must be at least 8 characters long')
    return false
  }

  return true
}

export { profileValidation }