import { CreateProfileDto } from "../dtos/create-profile-dto";
import { UpdateProfileDto } from "../dtos/update-profile-dto";
import { ProfilesService } from "./profiles.service";
export declare class ProfilesController {
    private profilesService;
    constructor(profilesService: ProfilesService);
    create(dto: CreateProfileDto): Promise<void>;
    findAll(): Promise<import("../dtos/get-profile-dto").GetProfileDTO[]>;
    findOne(id: number): Promise<{
        id: number;
        userId: number;
        fullName: string;
        birthDate: string | undefined;
        avatarUrl: string;
    }>;
    update(id: number, dto: UpdateProfileDto): Promise<void>;
    delete(id: number): Promise<void>;
}
