const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Test Employee class functionality.", () => {
    it("Test if Employee class creates object.", () => {
      const employee = new Employee("Bob", 3, "bob@test.com",);
      expect(typeof employee).toEqual("object");
    });
    it("Test that name works.", () => {
      const employee = new Employee("Bob", 3, "bob@test.com",);
      expect(employee.name).toEqual("Bob");
    });
    it("Test that id works.", () => {
      const employee = new Employee("Bob", 3, "bob@test.com",);
      expect(employee.id).toEqual(3);
    });
    it("Test that email works.", () => {
      const employee = new Employee("Bob", 3, "bob@test.com",);
      expect(employee.email).toEqual("bob@test.com");
    });
    it("Test getRole method.", () => {
      const employee = new Employee("Bob", 3, "bob@test.com",);
      expect(employee.getRole()).toEqual("Employee");
    });
    it("Test getName method.", () => {
      const employee = new Employee("Bob", 3, "bob@test.com",);
      expect(employee.getName()).toEqual("Bob");
    });
    it("Test getId method.", () => {
      const employee = new Employee("Bob", 3, "bob@test.com",);
      expect(employee.getId()).toEqual(3);
    });
    it("Test getEmail method.", () => {
      const employee = new Employee("Bob", 3, "bob@test.com",);
      expect(employee.getEmail()).toEqual("bob@test.com");
    });
  });
});
