describe("Algo", () => {
    describe("reverse", () => {
      it('should return a reversed string', () =>{
        const str = "Hello World";
        const reversed = "dlroW olleH";
        const execute = new Algo().reverse(str)
        expect(execute).toEqual(reversed);
      })})});