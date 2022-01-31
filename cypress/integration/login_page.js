describe("Problem Detailed Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get('a[href*="/moderator"]').click();
  });

  it("displays error message when inputted email didn't pass client-side validation", () => {
    cy.get('input[name="email"]').type("test");
    cy.get('input[name="password"]').type("123");

    cy.contains("Błędny email");
  });

  it("displays error message when inputted password didn't pass client-side validation", () => {
    cy.get('input[name="password"]').click();
    cy.get('input[name="email"]').type("test");

    cy.contains("Błędne hasło");
  });

  it.only("doesn't logout user when she/he clicked 'Remember me' checbox", () => {
    cy.get('input[name="email"]').type("kasia@tc.io");
    cy.get('input[name="password"]').type("!Pass112233");
    // cy.get('[type="checkbox"]').check({ force: true });

    cy.get("form").submit();
    cy.contains("Witaj, moderatorze!");

    cy.clearLocalStorage(/user/);

    cy.get('a[href*="/moderator"]').click();
    cy.contains("Witaj, moderatorze!");
  });
});
