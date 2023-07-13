const PRODUCT_SALARY = 50;

class Employee {
  constructor(id, fullName, baseSalary, productQuantity, totalSalary) {
    this.id = id;
    this.fullName = fullName;
    this.baseSalary = baseSalary;
    this.productSalary = PRODUCT_SALARY;
    this.productQuantity = productQuantity;
    this.totalSalary = totalSalary;
  }

  get getId() {
    return this.id;
  }

  /**
   * @param {any} id
   */
  set setId(id) {
    this.id = id;
  }

  get getFullName() {
    return this.fullName;
  }

  /**
   * @param {any} fullName
   */
  set setFullName(fullName) {
    this.fullName = fullName;
  }

  get getBaseSalary() {
    return this.baseSalary;
  }

  /**
   * @param {any} baseSalary
   */
  set setBaseSalary(baseSalary) {
    this.baseSalary = baseSalary;
  }

  get getProductQuantity() {
    return this.productQuantity;
  }

  /**
   * @param {any} productQuantity
   */
  set setProductQuantity(productQuantity) {
    this.productQuantity = productQuantity;
  }

  get getTotalSalary() {
    return this.totalSalary;
  }

  /**
   * @param {any} totalSalary
   */
  set setTotalSalary(totalSalary) {
    this.totalSalary = totalSalary;
  }
}

export default Employee;