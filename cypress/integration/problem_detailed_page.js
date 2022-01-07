describe("Problem Detailed Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("doesn't display scroll to top button initially", () => {
    cy.get(`a[href="/problems/1"]`).first().click();
    cy.get('[class*="ScrollButton"]').should("not.be.visible");
  });

  it("scrolls to the top of the page after clicking on scroll button", () => {
    cy.get(`a[href="/problems/1"]`).first().click();
    cy.scrollTo(0, 400);
    cy.get('[class*="ScrollButton"]').should("be.visible").click();
    cy.get("nav").should("be.visible");
  });

  it("shows download button", () => {
    cy.get(`a[href="/problems/1"]`).first().click();
    cy.contains("Pobierz treść");
  });
});
