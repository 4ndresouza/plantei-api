import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dontevn.config()

const BASE_URL_DB = process.env.BASE_URL_DB;

export const sequelize = new Sequelize(
    BASE_URL_DB,
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true
            }
        },
        loggin: true
    }
) // Example for postgres