import { AuthSignInUseCase } from "./lib/auth/application/AuthSignInUseCase";
import { InMemoryUserRepository } from "./lib/user/infrastructure/InMemoryUserRepository";

const initialUser = {
  email: "test@email.com",
  password: "password",
  id: "1",
  name: "Test User",
};

async function main() {
  const userRepository = new InMemoryUserRepository([initialUser]);
  const authSignInUseCase = new AuthSignInUseCase(userRepository);
  const authToken = await authSignInUseCase.run("test@email.com", "password");
  console.log(authToken);
}

main();
