import {DataSource} from "typeorm";
import {UserPersistence} from "../entities/user.entity";

export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(UserPersistence),
        inject: ['DATA_SOURCE'],
    },
];