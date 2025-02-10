type User = {
  name: string;
  age: number;
};

function getOlderUser(user1: User, user2: User): Object | null {
  if (user1.age > user2.age) {
    return user1;
  } else if (user1.age < user2.age) {
    return user2;
  } else {
    return null;
  }
}
export { getOlderUser };
