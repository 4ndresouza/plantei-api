import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
    'postgresql://neondb_owner:npg_7AViXEFWeg5U@ep-polished-smoke-ad3mfwae-pooler.c-2.us-east-1.aws.neon.tech/planteidb?sslmode=require&channel_binding=require',
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