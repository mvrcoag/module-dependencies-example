export class AuthInvalidCredentialsError extends Error {
  constructor() {
    super("Invalid credentials");
    Object.setPrototypeOf(this, AuthInvalidCredentialsError.prototype);
  }
}
