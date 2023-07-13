import Employee from "./Employee.mjs";

function main() {
  let employees = [];

  employees = inputEmployees(employees);
  console.log("Array of employees: ");
  outputEmployees(employees);

  console.log("Calculating salary...");
  calculateEmpSalary(employees);
  console.log("List of employee salary is: ");
  outputEmployees(employees);

  console.log("Sorting increase by total salary...");
  sortIncreasingByTotalSalary(employees);
  console.log("Sorted employee array is: ");
  outputEmployees(employees);

  console.log("Searching max total salary...");
  sortIncreasingByTotalSalary(employees);
  console.log("Max total salary employee is: ");
  console.log(searchMaxTotalSalary(employees));

  console.log("Editing employee info...");
  editEmployee(employees);
  calculateEmpSalary(employees);
  console.log("After editing, employee array is: ");
  outputEmployees(employees);

  console.log("Removing employee...");
  removeEmployee(employees);
  console.log("After removing, employee array is: ");
  outputEmployees(employees);
}

function inputEmployee(idx) {
  let id = Number(prompt("Enter employee[" + (idx + 1) + "] id: "));
  let fullName = prompt("Enter employee[" + (idx + 1) + "] full name: ");
  let baseSalary = Number(
    prompt("Enter employee[" + (idx + 1) + "] base salary: ")
  );
  let productQuantity = Number(
    prompt("Enter employee[" + (idx + 1) + "] product quantity: ")
  );

  let employee = new Employee(id, fullName, baseSalary, productQuantity);
  return employee;
}

function inputEmployees(empArray) {
  let n = Number(prompt("Enter number of employees: "));
  for (let i = 0; i < n; i++) {
    empArray[i] = inputEmployee(i);
  }
  return empArray;
}

function outputEmployees(empArray) {
  for (let i = 0; i < empArray.length; i++) {
    console.log(JSON.stringify(empArray[i]));
  }
}

function calculateEmpSalary(empArray) {
  for (let i = 0; i < empArray.length; i++) {
    let baseSalary = empArray[i].baseSalary;
    let productSalary = empArray[i].productSalary;
    let productQty = empArray[i].productQuantity;
    let totalSalary = calcTotalSalary(baseSalary, productSalary, productQty);
    empArray[i].totalSalary = totalSalary;
  }
}

function calcTotalSalary(baseSalary, productSalary, productQty) {
  const PRODUCT_QTY_TARGET_AT_LEAST_PER_MONTH = 50;
  const INCREASE_10_PERCENT_OF_PRODUCT_SALARY = 0.1;
  const DECREASE_10_PERCENT_OF_TOTAL_SALARY = 0.9;
  let totalSalary = baseSalary + productSalary * productQty;

  if (productQty < PRODUCT_QTY_TARGET_AT_LEAST_PER_MONTH) {
    totalSalary = totalSalary * DECREASE_10_PERCENT_OF_TOTAL_SALARY;
  } else if (productQty > PRODUCT_QTY_TARGET_AT_LEAST_PER_MONTH) {
    let exceededTargetProductQty =
      productQty - PRODUCT_QTY_TARGET_AT_LEAST_PER_MONTH;
    let exceededTargetProductSalary =
      exceededTargetProductQty *
      INCREASE_10_PERCENT_OF_PRODUCT_SALARY *
      productSalary;
    totalSalary = totalSalary + exceededTargetProductSalary;
  }
  return totalSalary;
}

function sortIncreasingByTotalSalary(empArray) {
  empArray.sort((employeeA, employeeB) => {
    const totalSalaryA = employeeA.totalSalary;
    const totalSalaryB = employeeB.totalSalary;
    return totalSalaryA - totalSalaryB;
  });
}

function searchMaxTotalSalary(empArray) {
  let maxSalaryEmployee = empArray[0];
  for (let i = 0; i < empArray.length; i++) {
    if (maxSalaryEmployee.totalSalary < empArray[i].totalSalary) {
      maxSalaryEmployee = empArray[i];
    }
  }
  return maxSalaryEmployee;
}

function editEmployee(empArray) {
  let editingId = Number(prompt("Enter employee id want to edit: "));
  for (let i = 0; i < empArray.length; i++) {
    if (editingId == empArray[i].id) {
      empArray[i].fullName = prompt("Enter full name to edit: ");
      empArray[i].baseSalary = Number(prompt("Enter base salary to edit: "));
      empArray[i].productQuantity = Number(
        prompt("Enter product quantity to edit: ")
      );
    }
  }
}

function removeEmployee(empArray) {
  let removingId = Number(prompt("Enter employee id want to remove: "));
  for (let i = 0; i < empArray.length; i++) {
    if (removingId == empArray[i].id) {
      empArray.splice(i, 1);
      break;
    }
  }
}

main();
