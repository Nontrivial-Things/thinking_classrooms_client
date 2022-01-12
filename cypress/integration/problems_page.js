describe("Problem Detailed Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("shows problem detailed page after clicking on search result tile on mobile and tablet", () => {
    cy.viewport("iphone-6");
    cy.get('[class*="SearchResultTile"]').first().click();
    cy.contains("Pobierz treść");
  });

  it("doesn't show problem detailed page after clicking on search result tile on desktop", () => {
    cy.get('[class*="SearchResultTile"]').first().click();
    cy.contains("Wyniki wyszukiwania");
  });
});
