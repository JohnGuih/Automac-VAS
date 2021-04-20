const Sequelize = require('sequelize');
const sequelize = new Sequelize('heroku_f93e64e97944d76', 'b4b98a1c928a5c', '75b06475', {
    host: "us-cdbr-east-03.cleardb.com",
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}