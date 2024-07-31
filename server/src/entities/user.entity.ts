import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({
    name: 'users',
})
export class UserPersistence {
    @PrimaryGeneratedColumn('uuid')
    user_id: string;

    @Column()
    name: string;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    password: string;

    @Column({default: false})
    is_verified: boolean;

    @Column({
        nullable : true
    })
    email_token: string;

}