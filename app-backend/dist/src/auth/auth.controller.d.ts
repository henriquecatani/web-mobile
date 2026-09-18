import { AuthService } from "./auth.service";
import { CreateUserDTO } from "../dtos/create-users-dto";
export declare class AuthController {
    private auth;
    constructor(auth: AuthService);
    login(dto: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
        user: {
            sub: number;
            email: string;
            name: string;
        };
    }>;
    register(dto: CreateUserDTO): Promise<{
        access_token: string;
        user: {
            sub: number;
            email: string;
            name: string;
        };
    }>;
}
