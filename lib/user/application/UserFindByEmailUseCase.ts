import { User } from "../domain/User";
import { UserNotFoundError } from "../domain/UserNotFoundError";
import { UserRepository } from "../domain/UserRepository";

export class UserFindByEmailUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async run(email: string): Promise<{
    id: string;
    name: string;
    email: string;
  }> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new UserNotFoundError();
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}
