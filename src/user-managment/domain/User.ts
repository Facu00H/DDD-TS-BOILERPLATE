import { Base } from "../../shared/domain/Base";
import { IUser, role } from "./interfaces/IUser";

export class User extends Base implements IUser  {
  email: string;
  role: role;
  name: string | null;

  constructor(email: string, role: role, name?: string | null) {
    super();
    this.email = email;
    this.role = role;
    this.name = name ?? null;
  }
}
