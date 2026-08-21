import { Body, Injectable } from "@nestjs/common";
import { CreateUserDTO } from "../dtos/create-users-dto";
import { PrismaService } from "../database/prisma.service";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(dto: CreateUserDTO) {
    const userCreated = await this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
      },
    });
    return {
      message: "Usuário criado com sucesso!",
      data: userCreated,
    };
  }

  async getAllUsers(): Promise<CreateUserDTO[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }
  async updateUser(id: number, dto: CreateUserDTO) {
    await this.prisma.user.update({
      where: { id },
      data: {
        name: dto.name ?? "",
        email: dto.email ?? "",
      },
    });
    return { message: "user updated" };
  }
  async deleteUser(id: number): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }
}
