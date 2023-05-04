const {db,DataTypes,Model} = require('../db/connection')

class Board extends Model {}


Board.init({

},
{sequelize: db})

module.exports = Board;