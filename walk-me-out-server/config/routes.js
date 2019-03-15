const authRoutes = require('../routes/auth');
const profileRoutes = require('../routes/profile');
const dogRoutes = require('../routes/dog');
const walkRoutes = require('../routes/walk');
const adminRoutes = require('../routes/admin');

module.exports = (app) => {
    app.use('/auth',authRoutes);
    app.use('/profile', profileRoutes);
    app.use('/dog',dogRoutes);
    app.use('/walk',walkRoutes);
    app.use('/admin',adminRoutes)
}