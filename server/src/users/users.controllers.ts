import {Body, Controller, Inject, Post} from "@nestjs/common";
import {CreateUserDto} from "./CreateUser.dto";
import {UsersService} from "./users.service";
import * as crypto from "node:crypto";

@Controller('users')
export class UsersController {
    constructor(@Inject() private readonly usersService: UsersService) {
    }
    @Post('register')
    registerUser(@Body() body : CreateUserDto) {
        const emailToken = crypto.randomBytes(64).toString('hex');
    }

    loginUser() {

    }

    findUser(){

    }

    getUser() {

    }
}