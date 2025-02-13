enum Permission {
  READ,
  WRITE,
  DELETE,
}

type User = {
  login: string,
};

type AdminPermission = {
  permission: Permission,
};

// BEGIN (write your solution here)
type Admin = User & AdminPermission

function addAdmin(user: User): Admin {
  return {login: user.login, permission: Permission.READ}
}

// END

export {User, Admin, Permission};
export default addAdmin;
