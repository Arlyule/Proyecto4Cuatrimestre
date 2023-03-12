"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('merca', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    password: '12345'
});
exports.default = sequelize;
