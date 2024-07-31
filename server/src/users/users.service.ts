import {Inject, Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {UserPersistence} from "../entities/user.entity";

@Injectable()
export class UsersService {
    constructor(@Inject('USER_REPOSITORY') private readonly userRepository: Repository<UserPersistence>) {}

}