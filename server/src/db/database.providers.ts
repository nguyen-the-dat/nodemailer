import { DataSource } from 'typeorm';
import path from "path";
import {UserPersistence} from "../entities/user.entity";

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'root',
                password: 'root',
                database: 'test',
                entities: [UserPersistence],
                synchronize: true,
            });

            return dataSource.initialize();
        },
    },
];