"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let ProfilesService = class ProfilesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const user = await this.prisma.user.findUnique({
            where: { id: dto.userId },
        });
        if (!user) {
            throw new common_1.BadRequestException("Usuário não existe.");
        }
        const existing = await this.prisma.profile.findUnique({
            where: { userId: dto.userId },
        });
        if (existing) {
            throw new common_1.ConflictException("Usuário já possui um perfil.");
        }
        await this.prisma.profile.create({
            data: {
                userId: dto.userId ?? 0,
                fullName: dto.fullName ?? "",
                birthDate: dto.birthDate ?? "",
                avatarUrl: dto.avatarUrl ?? "",
            },
        });
    }
    async update(id, dto) {
        const profile = await this.prisma.profile.findUnique({ where: { id } });
        if (!profile)
            throw new common_1.NotFoundException("Perfil não encontrado.");
        await this.prisma.profile.update({
            where: { id },
            data: {
                birthDate: dto.birthDate,
                fullName: dto.fullName,
                avatarUrl: dto.avatarUrl,
            },
        });
    }
    async findOne(id) {
        const p = await this.prisma.profile.findUnique({ where: { id } });
        if (!p)
            throw new common_1.NotFoundException("Perfil não encontrado.");
        return {
            id: p.id,
            userId: p.userId,
            fullName: p.fullName,
            birthDate: p.birthDate?.toISOString(),
            avatarUrl: p.avatarUrl ?? "",
        };
    }
};
exports.ProfilesService = ProfilesService;
exports.ProfilesService = ProfilesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProfilesService);
//# sourceMappingURL=profiles.service.js.map