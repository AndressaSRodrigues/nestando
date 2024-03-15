import { IsEnum, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(['admin', 'customer'], {
        message: 'Valid role required.'
    })
    role: 'admin' | 'customer';
}