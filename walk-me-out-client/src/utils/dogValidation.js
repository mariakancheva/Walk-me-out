import toastr from 'toastr'

function dogValidation (name, breed, age, weight) {
  if (name.length < 2 || name === '') {
    toastr.error('Name must be at least 2 characters long')
    return false
  }
  if (breed.length < 3 || breed === '') {
    toastr.error('Breed must be at least 3 characters long')
    return false
  }
  
  if (age < 0.3 || age === '') {
    toastr.error('Age must be at least 0.3 years')
    return false
  }
  if (weight < 1 || weight === '') {
    toastr.error('Weight must be at least 1')
    return false
  }

  return true
}

export {
  dogValidation
}