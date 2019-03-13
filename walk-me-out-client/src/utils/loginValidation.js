import toastr from 'toastr'
const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)

function loginValidation (email, password) {
  if (!emailRegex.test(email) || email === '') {
    toastr.error('Please provide a correct email address')
    return false
  }
  if (password.length < 6 || password === '') {
    toastr.error('Password must be at least 6 characters long')
    return false
  }

  return true
}

export default loginValidation