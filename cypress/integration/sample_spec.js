describe("<App />", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("shows problem extension after clicking on suggestion", async () => {
    cy.get(`a[href="/problems/1"]`).first().click();
    cy.contains("Treść problemu");
    cy.get(".ScrollButton-sc-si0bqp-0").should("not.be.visible");
    cy.scrollTo(0, 400);
    cy.get(".ScrollButton-sc-si0bqp-0").should("be.visible").click();
  });
});
