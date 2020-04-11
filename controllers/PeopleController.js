const PeopleRepository = require("../repositories/People");

class PeopleController {
  async getPeople() {
    return PeopleRepository.getPeople();
  }

  async createPerson(person) {
    return PeopleRepository.createPerson(person);
  }
}

module.exports = new PeopleController();
