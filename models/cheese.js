const {db,DataTypes,Model} = require('../db/connection')

class Cheese extends Model {}


Cheese.init({

},
{sequelize: db})

module.exports = Cheese;