describe("Problem Detailed Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get('a[href*="/moderator"]').click();
  });

  it("displays error message when inputted email and password didn't pass validation", () => {
    cy.get('input[name="email"]').type("test");
    cy.get('input[name="password"]').type("123");

    cy.contains("Błędny email");
  });

  it("displays error message when inputted password didn't pass validation", () => {
    cy.get('input[name="password"]').type("123");
    cy.get('input[name="email"]').type("test");

    cy.contains("Błędne hasło");
  });
});
