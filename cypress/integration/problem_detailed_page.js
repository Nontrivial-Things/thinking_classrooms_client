const path = require("path");

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

  it("initiates download pdf file containing problem details and verify it", () => {
    cy.get(`a[href="/problems/1"]`).first().click();

    cy.contains("Pobierz treść").should("be.visible").click();
    cy.wait(1000);
    const downloadsFolder = Cypress.config("downloadsFolder");
    cy.readFile(path.join(downloadsFolder, "Ciągi matematyczne.pdf")).should(
      "exist"
    );
  });

  it("initiates download pdf file containing additional resources and verify it", () => {
    cy.get(`a[href="/problems/1"]`).first().click();
    cy.contains("additional resources").should("be.visible").click();

    const downloadsFolder = Cypress.config("downloadsFolder");
    cy.readFile(path.join(downloadsFolder, "problem_detailed_page.pdf")).should(
      "exist"
    );
  });
});
