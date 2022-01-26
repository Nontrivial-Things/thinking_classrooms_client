describe("Problem Detailed Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get('a[href*="/moderator"]').click();
  });

  it("displays error message when inputted email didn't pass validation", () => {
    cy.get('input[name="email"]').type("test{enter}");

    cy.contains("Błędny email");
  });

  it("displays error message when inputted password didn't pass validation", () => {
    cy.get('input[name="password"]').type("test{enter}");

    cy.contains("Błędne hasło");
  });
});
