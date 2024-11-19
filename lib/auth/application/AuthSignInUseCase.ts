import { UserRepository } from "../../user/domain/UserRepository";
import { AuthInvalidCredentialsError } from "../domain/AuthInvalidCredentialsError";
import { AuthToken } from "../domain/AuthToken";

export class AuthSignInUseCase {
  constructor(private userRepository: UserRepository) {}

  async run(email: string, password: string): Promise<AuthToken> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AuthInvalidCredentialsError();
    }

    if (user.password !== password) {
      throw new AuthInvalidCredentialsError();
    }

    const token = new AuthToken(user.id);

    return {
      token: token.token,
    };
  }
}
