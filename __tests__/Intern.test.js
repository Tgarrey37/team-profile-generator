const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Test Intern class functionality.", () => {
    it("Test role.", () => {
      const intern = new Intern("John", 3, "john@test.com", "UofA");
      expect(intern.role).toEqual("Intern");
    });
    it("Test school.", () => {
      const intern = new Intern("John", 3, "john@test.com", "UofA");
      expect(intern.school).toEqual("UofA");
    });
    it("Test getSchool method.", () => {
      const intern = new Intern("John", 3, "john@test.com", "UofA");
      expect(intern.getSchool()).toEqual("UofA");
    });
    it("Test getRole method.", () => {
      const intern = new Intern("John", 3, "john@test.com", "UofA");
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
