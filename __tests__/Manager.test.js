const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Test Manager class functionality.", () => {
    it("Test role.", () => {
      const manager = new Manager("John", 3, "john@test.com", 10);
      expect(manager.role).toEqual("Manager");
    });
    it("Test office number.", () => {
      const manager = new Manager("John", 3, "john@test.com", 10);
      expect(manager.officeNumber).toEqual(10);
    });
    it("Test getOfficeNumber method.", () => {
      const manager = new Manager("John", 3, "john@test.com", 10);
      expect(manager.getOfficeNumber()).toEqual(10);
    });
    it("Test getRole method.", () => {
      const manager = new Manager("John", 3, "john@test.com", 10);
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
