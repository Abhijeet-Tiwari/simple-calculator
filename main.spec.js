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

  describe("updateResult()", function () {
    let element;
    beforeAll(function () {
      element = document.createElement('div');
      element.setAttribute('id', 'result');
      document.body.appendChild(element);
    });

    afterAll(function () {
      const element = document.getElementById('result');
      document.body.removeChild(element);
    });

    it("should show result to the DOM", function () {
      updateResult('5');
      expect(element.innerHTML).toBe('5');
    });
  });
});