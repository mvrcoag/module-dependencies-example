import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  constructor(initialUsers: User[] = []) {
    this.users = initialUsers;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find((user) => user.email === email) || null;
  }
}
