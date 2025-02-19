//complicated topic

type User = {
  id: number,
  name: string,
  age: number,
};

type Friends = [number, number];

export type UserResponse = {
  users: User[],
  friends: Friends[]
};

// BEGIN (write your solution here)
function getUserFriends(userResponseJSON: string, userId: number): User[] {
  const userResponseObj: UserResponse = JSON.parse(userResponseJSON);
  const friendsPairs = userResponseObj.friends.filter((pair) => pair.includes(userId));
  const friendsIDs = friendsPairs.flatMap((pair) => pair.filter((id) => id !== userId));
  const usersById = new Map(userResponseObj.users.map(user => [user.id, user]));
  return friendsIDs
    .map(id => usersById.get(id))
    .filter((user): user is User => user !== undefined);
}

// END


const userJson = JSON.stringify({
  users: [
    {id: 1, name: 'John', age: 20},
    {id: 2, name: 'Mary', age: 21},
  ],
  friends: [
    [1, 2],
  ],
});

getUserFriends(userJson, 1); // [{ id: 2, name: 'Mary', age: 21 }]
// getUserFriends(userJson, 2); // [{ id: 1, name: 'John', age: 20 }]
// getUserFriends(userJson, 3); // []
