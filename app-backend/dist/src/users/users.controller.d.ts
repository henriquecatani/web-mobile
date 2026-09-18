import { CreateUserDTO } from "../dtos/create-users-dto";
import { UsersService } from "./users.service";
export declare class UsersController {
    private service;
    constructor(service: UsersService);
    create(body: CreateUserDTO): Promise<void>;
    findAll(): Promise<import("../dtos/get-user-dto").GetUserDTO[]>;
    update(id: number, body: CreateUserDTO): Promise<void>;
    delete(id: number): Promise<void>;
}
