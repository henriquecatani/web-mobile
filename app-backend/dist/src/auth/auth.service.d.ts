import { JwtService } from "@nestjs/jwt";
import { CreateUserDTO } from "../dtos/create-users-dto";
import { UsersService } from "../users/users.service";
export declare class AuthService {
    private jwt;
    private userService;
    constructor(jwt: JwtService, userService: UsersService);
    login(email: string, password: string): Promise<{
        access_token: string;
        user: {
            sub: number;
            email: string;
            name: string;
        };
    }>;
    validate(email: string, password: string): Promise<{
        name: string;
        email: string;
        createdAt: Date;
        id: number;
    } | null>;
    register(dto: CreateUserDTO): Promise<{
        access_token: string;
        user: {
            sub: number;
            email: string;
            name: string;
        };
    }>;
}
