namespace Company {
  export function isEmployeeEmail(email: string, domain: string): boolean {
    return email.split('@').pop() === domain;
  }
}
