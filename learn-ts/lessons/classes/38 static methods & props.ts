class UserResponse {
  user: string;

  constructor(user: string) {
    this.user = user
  }

  static fromArray(arr: string[]): UserResponse[] {
    return arr.map((item) => new UserResponse(item))
  }
}
