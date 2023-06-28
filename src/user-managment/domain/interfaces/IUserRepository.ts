import { User } from "../User";
import { IUser } from "./IUser";

export interface IUserRepository {
  createUser(_user: IUser): Promise<User>;
  getUserById(_userId: number): Promise<User>;
  getAllUsers(): Promise<User[]>;
  updateUser(_userId: number, _user: IUser): Promise<User>;
  deleteUser(_userId: number): Promise<void>;
}
