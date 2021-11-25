import { render, screen } from "@testing-library/react";

import SearchResultTile from "./index";

describe("Search Problem Result Tile", () => {
  it("displays given problem text details", () => {
    render(
      <SearchResultTile
        text="Określenie ciągu"
        tags={["ciągi", "noga"]}
        date={new Intl.DateTimeFormat("en-GB", {
          dateStyle: "medium",
        }).format(new Date())}
        author="Maria Salomea Skłodowska-Curie"
        educationStage="Dowolony etap edukacji"
      />
    );

    expect(screen.getByText("Określenie ciągu")).toBeInTheDocument();
    expect(screen.getByText("25 Nov 2021")).toBeInTheDocument();
    expect(
      screen.getByText("Maria Salomea Skłodowska-Curie")
    ).toBeInTheDocument();
    expect(screen.getByText("ciągi")).toBeInTheDocument();
    expect(screen.getByText("Dowolony etap edukacji")).toBeInTheDocument();
  });
});
