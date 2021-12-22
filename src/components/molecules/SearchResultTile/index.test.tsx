import { render, screen } from "@testing-library/react";

import SearchResultTile from "./index";
import { Level } from "./interface";

describe("<SearchResultTile />", () => {
  it("displays given problem text details", () => {
    render(
      <SearchResultTile
        title="Określenie ciągu"
        tags={["ciągi", "noga"]}
        createdAt="01.01.2021"
        author="Maria Salomea Skłodowska-Curie"
        level={Level.PRIMARY}
        id={1}
      />
    );

    expect(screen.getByText("Określenie ciągu")).toBeInTheDocument();
    expect(screen.getByText("01.01.2021")).toBeInTheDocument();
    expect(
      screen.getByText("Maria Salomea Skłodowska-Curie")
    ).toBeInTheDocument();
    expect(screen.getByText("ciągi")).toBeInTheDocument();
    expect(screen.getByText("noga")).toBeInTheDocument();
    expect(screen.getByText("szkoła podstawowa")).toBeInTheDocument();
  });

  it("displays button to see given problem details", () => {
    render(
      <SearchResultTile
        title="Określenie ciągu"
        tags={["ciągi", "noga"]}
        createdAt="01.01.2021"
        author="Maria Salomea Skłodowska-Curie"
        level={Level.SECONDARY}
        id={1}
      />
    );

    expect(screen.getByText("Zobacz treść")).toBeInTheDocument();
  });
});
