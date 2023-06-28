import { Router } from "express";
import { UserController } from "../user-managment/infraestructure/controller/UserController";


export default class UserRouter {
  private readonly router: Router;
  private readonly userController: UserController;

  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.routes();
  }

  private routes(): void {

    this.router.get("/getOne/:id", this.userController.getUserById);
    this.router.get("/getAll/", this.userController.getAllUsers);

    this.router.post("/create", this.userController.createUser);

    this.router.patch("/update/:id", this.userController.editOneUser);

    this.router.delete("/delete/:id", this.userController.deleteOneUser);
  }

  public getRouter(): Router {
    return this.router;
  }
}
