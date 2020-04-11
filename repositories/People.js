const db = require("../db");
const Schema = db.Schema;

const peopleSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  gender: { type: String },
});

const PeopleModel = db.model("People", peopleSchema);

class People {
  async getPeople() {
    return PeopleModel.find();
  }
  async createPerson(person) {
    return PeopleModel.create(person);
  }
}

module.exports = new People();
