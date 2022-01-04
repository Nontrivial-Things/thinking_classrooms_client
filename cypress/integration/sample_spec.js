describe("<App />", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("shows problem extension after clicking on suggestion", () => {
    cy.get(`a[href="/problems/1"]`).first().click();
    cy.contains("Treść problemu");
  });

  it("scrolls to the top of the page after clicking on scroll button", () => {
    cy.get(`a[href="/problems/1"]`).first().click();
    cy.scrollTo(0, 400);

    cy.get(".ScrollButton-sc-si0bqp-0").should("be.visible").click();

    cy.should("be.visible", "O metodzie");
  });

  it("shows download button", () => {
    cy.get(`a[href="/problems/1"]`).first().click();
    cy.contains("Pobierz treść");
  });
});
