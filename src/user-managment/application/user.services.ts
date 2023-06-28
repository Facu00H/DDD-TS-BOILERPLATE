import { User } from "../domain/User";
import { IUserRepository } from "../domain/interfaces/IUserRepository";

export class UserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async createUser(userData: User): Promise<User> {
    const {email, role, name } = userData;
    const user: User = new User(email, role, name);
    return await this.userRepository.createUser(user);
  }

  public async updateUser(userId: number, userData: User): Promise<User> {
    return await this.userRepository.updateUser(userId, userData);
  }

  public async getAllUsers(): Promise<User[]> {
    return await this.userRepository.getAllUsers();
  }

  public async getOneUser(userId: number): Promise<User> {
    return await this.userRepository.getUserById(userId);
  }

  public async deleteOneUser(userId: number): Promise<void> {
    return await this.userRepository.deleteUser(userId);
  }
}
