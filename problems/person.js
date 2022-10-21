class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello(person, message) {
    return message + this.name;
  }

  visit(person) {
    return `${this.name} visited ${person.name}`
  }

  switchVisit(person) {
    return person.visit(this);
  }

  update(obj) {
    if (typeof obj !== "object") {
      throw new TypeError("Must be a string.")
    }

    if ("name" in obj) {
      this.name = obj.name;
      this.age = obj.age;
      return this;
    } else {
      throw new TypeError("Must have a name property.")

    }

  }

  tryUpdate(obj) {
    try {
      if (this.update(obj)) {
        return true;
      } else {
        return false;
      }
    } catch {
      return false;
    }
  }

  static greetAll(...obj) {
    return obj.map((people) => people.sayHello(people, "Hello "))
  }

}

const david = new Person("David", 32);
// const james = new Person("James", 30);

// // console.log(david.switchVisit(james));
// console.log("d", david)
// console.log(david.update(james))

let coolPerson = new Person("mai", 32); // Person { name: 'mai', age: 32 }
// let expectTrue = coolPerson.tryUpdate({ name: "lulu", age: 57 })
// console.log(expectTrue)
// let expectFalse = coolPerson.tryUpdate({ age: 57 })
// console.log(expectFalse);
// console.log(coolPerson.tryUpdate({ age: 57 }));
// console.log(coolPerson); // Person { name: 'lulu', age: 57 }

let people = [david, coolPerson];
const greetEveryone = Person.greetAll(david, coolPerson);
console.log(greetEveryone)

module.exports = Person;
