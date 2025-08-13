const { categoryRouter } = require("./category.route");
const { courseRouter } = require("./course.route");
const { loginRouter } = require("./login.route");
const { registerRouter } = require("./register.route");

module.exports = {
    loginRouter,
    registerRouter,
    courseRouter,
    categoryRouter
};