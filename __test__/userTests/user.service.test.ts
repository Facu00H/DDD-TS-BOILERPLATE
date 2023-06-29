import { Role } from "@prisma/client";
import { MockContext, Context, createMockContext } from "../../context";
import { createUser, updateUsername } from "./functionsUser";

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

test("should create new user", async () => {
  const user = {
    id: 1,
    name: "Rich",
    email: "hello@prisma.io",
    createdAt: new Date(),
    updatedAt: new Date(),
    role: Role.USER,
  };
  mockCtx.prisma.user.create.mockResolvedValue(user);

  const expectedUser = {
    ...user,
    createdAt: expect.any(Date),
    updatedAt: expect.any(Date),
  };

  await expect(createUser(user, ctx)).resolves.toEqual(expectedUser);
});

test("should update a user's name", async () => {
  const user = {
    id: 1,
    name: "Rich",
    email: "hello@prisma.io",
    createdAt: new Date(),
    updatedAt: new Date(),
    role: Role.USER,
  };
  mockCtx.prisma.user.update.mockResolvedValue(user);

  const expectedUser = {
    name: "Rich",
    email: "hello@prisma.io",
    createdAt: expect.any(Date),
    updatedAt: expect.any(Date),
    role: Role.USER,
  };

  await expect(updateUsername(user, ctx)).resolves.toMatchObject(expectedUser);
});
