const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Test Engineer class functionality.", () => {
    it("Test role.", () => {
      const engineer = new Engineer("John", 3, "john@test.com", "John13");
      expect(engineer.role).toEqual("Engineer");
    });
    it("Test Github.", () => {
      const engineer = new Engineer("John", 3, "john@test.com", "John13");
      expect(engineer.github).toEqual("John13");
    });
    it("Test getGithub method.", () => {
      const engineer = new Engineer("John", 3, "john@test.com", "John13");
      expect(engineer.getGithub()).toEqual("John13");
    });
    it("Test getRole method.", () => {
      const engineer = new Engineer("John", 3, "john@test.com", "John13");
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
