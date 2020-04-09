const app = require("./index");
const sinon = require("sinon");
const request = require("supertest");
const IndexController = require("./controllers/IndexController");

let IndexStub;

describe("Test index API", () => {
  test("Index should return 200", async (done) => {
    IndexStub = sinon
      .stub(IndexController, "getTestResponse")
      .returns({ hello: "test" });
    request(app).get("/test").expect(200, { hello: "test" }, done);
  });
});
