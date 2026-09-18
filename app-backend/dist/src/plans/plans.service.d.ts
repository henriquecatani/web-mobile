import { PrismaService } from "../database/prisma.service";
import { CreatePlanDto } from "../dtos/create-plan-dto";
import { UpdatePlanDto } from "../dtos/update-plan-dto";
export declare class PlansService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreatePlanDto): Promise<{
        message: string;
        data: {
            name: string;
            id: number;
            price: number;
        };
    }>;
    findAll(): Promise<{
        name: string;
        id: number;
        price: number;
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        id: number;
        price: number;
    } | null>;
    update(id: number, dto: UpdatePlanDto): Promise<{
        message: string;
        data: {
            name: string;
            id: number;
            price: number;
        };
    }>;
    delete(id: number): Promise<void>;
}
