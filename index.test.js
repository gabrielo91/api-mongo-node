const server = require("./index");
const sinon = require("sinon");
const request = require("supertest");
const IndexController = require("./controllers/IndexController");

afterAll((done) => {
  server.close(done);
});

describe("Test index API", () => {
  test("Index should return 200", async (done) => {
    sinon.stub(IndexController, "getTestResponse").returns({ hello: "test" });
    request(server).get("/test").expect(200, { hello: "test" }, done);
  });

  test("an extra test", () => {
    expect(true).toBeTruthy();
  });
});
