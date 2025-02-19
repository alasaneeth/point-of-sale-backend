import { Sequelize } from "sequelize";
import db from "../config/database"

const {DataTypes} = Sequelize;

const Product = db.define('product',{
    uuid:{
        type:DataTypes.STRING,
        defaultValue:false,
        validate: {
            notEmpty:true
        }
    },
    name:{
        type:DataTypes.STRING,
        defaultValue:false,
        validate: {
            notEmpty:true,
            len:[3,100]
        }
    },
    price:{
        type:DataTypes.INTEGER,
        defaultValue:false,
        validate: {
            notEmpty:true
        }
    },
    userId:{
        type:DataTypes.INTEGER,
        defaultValue:false,
        validate: {
            notEmpty:true
        }
    }
}, {
    freezeTableName:true
})

export default Product