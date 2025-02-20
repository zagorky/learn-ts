interface EmployeeSalary {
  [key: string]: number;
}


interface SalaryStatistics {
  min: number;
  max: number;
  avg: number;
}


function buildSalaryStatistics(employees: EmployeeSalary): SalaryStatistics {
  const values: number[] = Object.values(employees)
  const min = Math.min(...values);
  const max = Math.max(...values);
  const avg = values.reduce((acc, curr) => acc + curr, 0) / values.length;
  return {min: min, max: max, avg: avg,} satisfies SalaryStatistics
}

const employees: EmployeeSalary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

// employees.ironMan = 1000;

console.log(buildSalaryStatistics(employees)) // { min: 50, max: 150, avg: 100 }

