describe("main.js", function () {
  
  describe("calculate()", function () {
    it("should validate expression if first number is invalid", function () {
      spyOn(window,'updateResult').and.stub();
      calculate('a+3');
      expect(window.updateResult).toHaveBeenCalled();
    });

    it("should validate expression if second number is invalid", function () {
      spyOn(window,'updateResult').and.stub();
      calculate('3+a');
      expect(window.updateResult).toHaveBeenCalled();
    });

    it("should validate expression if operator is invalid", function () {
      spyOn(window,'updateResult').and.stub();
      calculate('2=5');
      expect(window.updateResult).toHaveBeenCalled();
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