import { CreateUserDTO } from "../dtos/create-users-dto";
import { PrismaService } from "../database/prisma.service";
import { GetUserDTO } from "../dtos/get-user-dto";
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(dto: CreateUserDTO): Promise<{
        message: string;
        data: {
            name: string;
            email: string;
            passwordHash: string;
            createdAt: Date;
            id: number;
        };
    }>;
    getAllUsers(): Promise<GetUserDTO[]>;
    getUserByEmail(email: string): Promise<{
        name: string;
        email: string;
        passwordHash: string;
        createdAt: Date;
        id: number;
    } | null>;
    updateUser(id: number, dto: CreateUserDTO): Promise<{
        message: string;
    }>;
    deleteUser(id: number): Promise<void>;
}
