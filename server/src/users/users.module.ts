import {Module} from '@nestjs/common';
import {DatabaseModule} from "../db/database.module";
import {userProviders} from "./user.providers";
import {UsersService} from "./users.service";
import {UsersController} from "./users.controllers";

@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [
        ...userProviders, UsersService
    ],
})
export class UsersModule {
}
