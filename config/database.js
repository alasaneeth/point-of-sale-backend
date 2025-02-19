import { Sequelize } from "sequelize";

const db = new Sequelize('my_pos','root','',{
    host:"localhost",
    dialect:"mysql"

})

export default db;