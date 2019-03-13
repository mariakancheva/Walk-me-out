import toastr from 'toastr'

function walkValidation (date, time) {
  if (date.length < 4 || date === '') {
    toastr.error('Have to pick a date')
    return false
  }
  if (time.length < 3 || lastName === '') {
    toastr.error('Have to pick a time')
    return false
  }

  return true
}

export default walkValidation