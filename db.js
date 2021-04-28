const { Sequelize, Op, Model, DataTypes } = require("sequelize");
/*const sequelize = new Sequelize('vas', 'root', '', {
  host: "localhost",
  dialect: 'mysql'
})*/
const sequelize = new Sequelize('heroku_f93e64e97944d76', 'b4b98a1c928a5c', '75b06475', {
    host: "us-cdbr-east-03.cleardb.com",
    dialect: 'mysql'
})

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

(async () => {
  //wait sequelize.sync({ force: true });
  // Code here
  //await console.log(sequelize)
})();

module.exports = {
    Sequelize: Sequelize,
    Op: Op,
    Model: Model,
    DataTypes: DataTypes,
    sequelize: sequelize
}