describe("main.js", function () {
  
  describe("main()", function () {
    it("should validate expression", function () {

    });

    it("should validate add", function () {

    });

    it("should validate subtract", function () {

    });

    it("should validate multiply", function () {

    });

    it("should validate subtract", function () {

    });

    it("should validate default Operation", function () {

    });

    it("should call updateResult function", function () {

    });

  });

  describe("updateResult()",() => {
    let element;
    beforeAll(() => {
      element = document.createElement('div');
      element.setAttribute('id', 'result');
      document.body.appendChild(element);
    });

    afterAll(() => {
      document.body.removeChild(element);
    });

    it("should show result to the DOM", () => {
      updateResult('5');
      expect(element.innerHTML).toBe('5');
    });
  });
});