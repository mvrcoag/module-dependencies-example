import { User } from "./User";

export interface UserRepository {
  findByEmail(email: string): Promise<User | null>;
}
