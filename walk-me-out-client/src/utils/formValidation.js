const registerValidationFunc = (
    email,
    username,
    password,
    confirmPassword
) => {
    let validEmail = (() => {
        let mailRegex = new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        let testMail = mailRegex.test(email)
        if (testMail && email !== '') {
            return true
        }
        return false
    })()

    let validUsername = (() => {
        if (username.length > 3 &&
            username !== '') {
            return true
        }
        return false
    })()

    let validPassword = (() => {
        if (
            password.length > 5 &&
            password !== ''
        ) {
            return true
        }
        return false
    })()

    let validConfirmPassword = (() => {
        if (
            confirmPassword.length > 5 &&
            confirmPassword !== '' &&
            confirmPassword === password
        ) {
            return true
        }
        return false
    })()

    return {
        validEmail,
        validUsername,
        validPassword,
        validConfirmPassword
    }
}

const loginValidationFunc = (email, password) => {
    let validEmail = (() => {
        let emailRegex = new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        let testMail = emailRegex.test(email)
        if (testMail && email !== '') {
            return true
        }
        return false
    })()

    let validPassword = (() => {
        if (
            password.length > 5 &&
            password !== ''
        ) {
            return true
        }
        return false
    })()

    return {
        validEmail,
        validPassword
    }
}

const dogValidationFunc = (name, breed, age, weight) => {
    let validName = (() => {
        if (
            name.length > 1 &&
            name !== ''
        ) {
            return true
        }
        return false
    })()

    let validBreed = (() => {
        if (
            breed.length > 2 &&
            breed !== ''
        ) {
            return true
        }
        return false
    })()

    let validAge = (() => {
        if (
            age > 0.3 &&
            age !== ''
        ) {
            return true
        }
        return false
    })()

    let validWeight = (() => {
        if (
            weight > 0 &&
            weight !== ''
        ) {
            return true
        }
        return false
    })()

    return {
        validName,
        validBreed,
        validAge,
        validWeight
    }
}

const walkValidationFunction = (date, time) => {
    let validDate = (() => {
        if (
            date.lenght > 3 &&
            date !== ''
        ) {
            return true
        }
        return false
    })()

    let validTime = (() => {
        if (
            time.lenght > 3 &&
            time !== ''
        ) {
            return true
        }
        return false
    })()

    return{
        validDate,
        validTime
    }
}

export {
    registerValidationFunc,
    loginValidationFunc,
    dogValidationFunc,
    walkValidationFunction
}
