import { UserService } from "../../application/user.services";
import { UserRepositoryPrismaPostgres } from "../user.repository";
import { Request, Response } from "express";
import { User } from "../../domain/User";
import { UserCreateSchema } from "../../../../prisma/generated/schemas/createOneUser.schema";
import { UserFindUniqueSchema } from "../../../../prisma/generated/schemas/findUniqueUser.schema";
import { controllerResponse } from "../../../shared/controllerResponses/IcontrollerResponse";
import{ UserUpdateOneSchema } from "../../../../prisma/generated/schemas/updateOneUser.schema";

export class UserController {

  private readonly userService: UserService;

  constructor() {
    const userService = new UserRepositoryPrismaPostgres();
    this.userService = new UserService(userService);
  }

  public createUser = async (req: Request, res: Response): controllerResponse => {
    try {
      const { body } = req;

      UserCreateSchema.validate(body);

      const user: User = await this.userService.createUser(body);

      return res.status(201).send(user);
    } catch (error) {
      return res.status(400).send(error);
    }
  };

  public getUserById = async (req: Request, res: Response): controllerResponse => {
    try {
      const { params } = req;
      const { error } = UserFindUniqueSchema.validate({ where: { id: Number(params.id) } });

      if (error) {
        return res.status(400).send((error as Error));
      }

      const user: User = await this.userService.getOneUser(Number(params.id));

      return res.status(200).send(user);
    } catch (error: unknown) {
      return res.status(400).send((error as Error).message);
    }
  };

  public getAllUsers = async (_req: Request, res: Response): controllerResponse => {
    try {
      const users: User[] = await this.userService.getAllUsers();

      return res.status(200).send(users);
    } catch (error) {
      return res.status(400).send((error as Error).message);
    }
  };

  public editOneUser = async (req: Request, res: Response): controllerResponse => {
    try {
      const { params, body } = req;
      const { error: paramError } = UserFindUniqueSchema.validate({ where: { id: Number(params.id) } });
      console.log(body);
      const { error: bodyError } = UserUpdateOneSchema.validate({data: body});

      if (paramError) return res.status(400).send((paramError as Error));
      if (bodyError) return res.status(400).send((bodyError as Error));

      const editedUser = await this.userService.updateUser(Number(params.id), body);

      return res.status(200).send(editedUser);

    } catch (error) {
      return res.status(400).send((error as Error).message);
    }
  };

  public deleteOneUser = async (req: Request, res: Response): controllerResponse => {
    try {
      const { params } = req;
      const { error } = UserFindUniqueSchema.validate({ where: { id: Number(params.id) } });

      if (error) {
        return res.status(400).send((error as Error));
      }

      await this.userService.deleteOneUser(Number(params.id));

      return res.status(200).send("User deleted successfully");
    } catch (error) {
      return res.status(400).send((error as Error).message);
    }
  };
}
