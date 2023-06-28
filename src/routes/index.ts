import { Request, Response, Router } from "express";
import UserRouter from "./userRoutes";

export default class IndexRouter {
  private readonly router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {

    const userRouter = new UserRouter();

    this.router.get("/", (_req: Request, res: Response) => {
      res.send("hello world");
    });
    this.router.use("/users", userRouter.getRouter());
  }

  public getRouter(): Router {
    return this.router;
  }
}
