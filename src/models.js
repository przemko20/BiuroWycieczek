const path = require('path')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(null,null,null, {
    dialect:'sqlite',
    storage:path.join('tmp', 'db.sqlite')
})

const Trip = sequelize.define('trip',{
    name: Sequelize.STRING,
    idTrip: Sequelize.INTEGER,
    dateCreate: Sequelize.DATE,
    dateModified: Sequelize.DATE,
    dateStart: Sequelize.DATE,
    dateEnd: Sequelize.DATE,
    prise: Sequelize.INTEGER,
    promo: Sequelize.INTEGER,
    type: Sequelize.STRING,
    level: Sequelize.CHAR,
})

const Person = sequelize.define('person',{
    name: Sequelize.STRING,
    /*
    idPerson: Sequelize.INTEGER,
    email: Sequelize.STRING,
    surname: Sequelize.STRING,
    tel: Sequelize.INTEGER,
    pesel: Sequelize.INTEGER,
    street: Sequelize.STRING,
    city: Sequelize.STRING,
    streetNumber: Sequelize.INTEGER,
    postCode1: Sequelize.INTEGER,
    postCode2: Sequelize.INTEGER,
    joinDate: Sequelize.DATE,
    position: Sequelize.STRING,
    idAp: Sequelize.INTEGER

*/
    
})


// Create table
Trip.sync()
Person.sync()

module.exports = {
  Trip,
  Person
}