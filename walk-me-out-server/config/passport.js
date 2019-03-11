const passport = require('passport');
const localSignupStrategy = require('../passport/local-singup');
const localLoginStrategy = require('../passport/local-login');

module.exports = () => {
    passport.use('local-signup', localSignupStrategy);
    passport.use('local-login',localLoginStrategy);
}