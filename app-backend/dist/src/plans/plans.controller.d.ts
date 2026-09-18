import { CreatePlanDto } from "../dtos/create-plan-dto";
import { PlansService } from "./plans.service";
import { UpdatePlanDto } from "../dtos/update-plan-dto";
export declare class PlansController {
    private plansService;
    constructor(plansService: PlansService);
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
    get(id: number): Promise<{
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
