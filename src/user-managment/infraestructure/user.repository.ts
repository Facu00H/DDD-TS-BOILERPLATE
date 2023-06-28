import prisma from "../../../prisma";
import { User } from "../domain/User";
import { IUser } from "../domain/interfaces/IUser";
import { IUserRepository } from "../domain/interfaces/IUserRepository";

export class UserRepositoryPrismaPostgres implements IUserRepository {

  public async createUser(user: User): Promise<User> {
    return await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        role: user.role
      }
    });
  }

  public async getUserById(userId: number): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        id: userId
      }
    });

    if (user === null) {
      throw new Error(`User with id: ${userId} not found`);
    }

    return user;
  }

  public async getAllUsers(): Promise<User[]> {
    const usersQuery = await prisma.user.findMany();

    if (usersQuery.length === 0) {
      throw new Error("The collection of users is empty");
    }

    return usersQuery;
  }

  public async updateUser(userId: number, user: IUser): Promise<User> {
    return await prisma.user.update({
      where: {
        id: userId
      },
      data: {
        name: user.name,
        email: user.email,
        role: user.role,
        updatedAt: new Date(),
      }
    });
  }


  public async deleteUser(userId: number): Promise<void> {
    try {
      await prisma.user.delete({
        where: {
          id: userId
        }
      });
    } catch (error) {
      throw new Error(`User with id: ${userId} not found`);
    }
  }
}
