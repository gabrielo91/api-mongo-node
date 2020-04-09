class IndexController {
  async getTestResponse() {
    return { hello: "world" };
  }
}

module.exports = new IndexController();
