function Person(first, last, age, gender, interests) {
  // attributes and methods
  this.name = `${first} ${last}`;
  this.age = age;
  this.gender = gender;
  this.intrests = interests;

}

const person1 = new Person('BOb','Smith',26,'male',['music','skiing']);
