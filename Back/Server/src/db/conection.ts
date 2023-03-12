import { Sequelize } from "sequelize";

const sequelize= new Sequelize('merca','root','',{
    host:'localhost',
    dialect: 'mysql',
    password: '12345'
});
export default sequelize