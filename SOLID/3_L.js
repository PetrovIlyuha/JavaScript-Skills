// // Liskov substitution principle

// class Person {}

// class Member extends Person {
//   access() {
//     console.log("You have access!");
//   }
// }

// class Guest extends Person {
//   isGuest = true;
// }

// class FrontEnd extends Member {
//   canCreateFrontend() {}
// }

// class BackEnd extends Member {
//   canCreateBackend() {}
// }

// class PersonFromAnotherCompany extends Guest {
//   access() {
//     throw new Error("You have no access >> Go to your office now!");
//   }
// }

// function openSecureDoor(member) {
//   member.access();
// }

// openSecureDoor(new FrontEnd());
// openSecureDoor(new BackEnd());
// openSecureDoor(new PersonFromAnotherCompany());

/**
 * Example 2
 */

class Component {
  isComponent = true;
}

class ComponentWithTemplating extends Component {
  render() {
    return `<div>Component</div>`;
  }
}

class HigherOrderComponent extends Component {}

class HeaderComponent extends ComponentWithTemplating {
  onInit() {}
}

class FooterComponent extends ComponentWithTemplating {
  afterInit() {}
}

class HOC extends HigherOrderComponent {
  render() {
    throw new Error("Render is not available in HOCs...");
  }

  wrapComponent(component) {
    component.wrapped = true;
    return component;
  }
}

function renderComponent(component) {
  component.render();
}

renderComponent(new HeaderComponent());
renderComponent(new FooterComponent());
