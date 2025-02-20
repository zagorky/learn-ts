

function createAccessChecker <T extends string, R extends  string>(obj:Record<T, Array<R>>)   {
  return function check(role: T, resource: R):boolean {
    return obj[role].includes(resource)
  }
}


type UserRole = 'admin' | 'user' | 'guest';
type UserResource = 'document' | 'user' | 'adminPanel';

const userRolePermissions: Record<UserRole, Array<UserResource>> = {
  admin: ['document', 'user', 'adminPanel'],
  user: ['document', 'user'],
  guest: ['document'],
};

const checkUserAccess = createAccessChecker<UserRole, UserResource>(userRolePermissions);

const isAdminAllowed = checkUserAccess('admin', 'adminPanel');
console.log(isAdminAllowed); // => true

const isUserAllowed = checkUserAccess('user', 'adminPanel');
console.log(isUserAllowed); // => false
