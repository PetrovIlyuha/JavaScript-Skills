// Liskov substitution principle

class Person {}

class Member extends Person {
  access() {
    console.log("You have access!");
  }
}

class Guest extends Person {
  isGuest = true;
}

class FrontEnd extends Person {
  canCreateFrontend() {}
}

class BackEnd extends Person {
  canCreateBackend() {}
}

class PersonFromAnotherCompany extends Person {
  access() {
    throw new Error("You have no access >> Go to your office now!");
  }
}

function openSecureDoor(member) {
  member.access();
}

openSecureDoor(new FrontEnd());
openSecureDoor(new BackEnd());
openSecureDoor(new PersonFromAnotherCompany());
