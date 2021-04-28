const { Sequelize, Op, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize('vas', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
  })

  const User = sequelize.define('user', {
    username: DataTypes.STRING,
    points: DataTypes.INTEGER
  }, { timestamps: false });
  
  const Profile = sequelize.define('profile', {
    name: DataTypes.STRING
  }, { timestamps: false });
  
  const Grant = sequelize.define('grant', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    selfGranted: DataTypes.BOOLEAN
  }, { timestamps: false });

User.belongsToMany(Profile, { through: Grant });
Profile.belongsToMany(User, { through: Grant });
User.hasMany(Grant);
Grant.belongsTo(User);
Profile.hasMany(Grant);
Grant.belongsTo(Profile);

(async () => {
  await sequelize.sync({ force: true });
  // Code here
  User.findAll({ include: Profile });
  Profile.findAll({ include: User });
  User.findAll({ include: Grant });
  Profile.findAll({ include: Grant });
  Grant.findAll({ include: User });
  Grant.findAll({ include: Profile });
})();