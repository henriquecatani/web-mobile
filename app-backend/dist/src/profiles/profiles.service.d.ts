import { CreateProfileDto } from "../dtos/create-profile-dto";
import { PrismaService } from "../database/prisma.service";
import { UpdateProfileDto } from "../dtos/update-profile-dto";
import { GetProfileDTO } from "../dtos/get-profile-dto";
export declare class ProfilesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateProfileDto): Promise<void>;
    update(id: number, dto: UpdateProfileDto): Promise<void>;
    getAllProfiles(): Promise<GetProfileDTO[]>;
    findOne(id: number): Promise<{
        id: number;
        userId: number;
        fullName: string;
        birthDate: string | undefined;
        avatarUrl: string;
    }>;
    deleteProfile(id: number): Promise<void>;
}
