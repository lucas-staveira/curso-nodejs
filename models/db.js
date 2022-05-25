const Sequelize = require ('sequelize')

// Conexáo com o banco de dados Mysql
const sequelize = new Sequelize('postapp', 'root', 'mysql',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}