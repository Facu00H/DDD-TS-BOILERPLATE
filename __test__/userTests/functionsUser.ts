import { Context } from "../../context";

interface CreateUser {
  name?: string | null;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function createUser(user: CreateUser, ctx: Context) {
  return await ctx.prisma.user.create({
    data: user,
  });
}

interface UpdateUser {
  id: number;
  name?: string;
  email?: string;
  updatedAt: Date;
}

export async function updateUsername(user: UpdateUser, ctx: Context) {
  const { id, ...userData } = user;
  console.log(id);
  return await ctx.prisma.user.update({
    where: { id: user.id },
    data: userData,
  });
}
