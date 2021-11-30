import { render, screen } from "@testing-library/react";

import SearchResultTile from "./index";

describe("<SearchResultTile />", () => {
  const date = new Intl.DateTimeFormat("pl-PL", {
    dateStyle: "medium",
  }).format(new Date());

  it("displays given problem text details", () => {
    render(
      <SearchResultTile
        text="Określenie ciągu"
        tags={["ciągi", "noga"]}
        date={new Intl.DateTimeFormat("pl-PL", {
          dateStyle: "medium",
        }).format(new Date())}
        author="Maria Salomea Skłodowska-Curie"
        educationStage="Dowolony etap edukacji"
      />
    );

    expect(screen.getByText("Określenie ciągu")).toBeInTheDocument();
    expect(screen.getByText(date)).toBeInTheDocument();
    expect(
      screen.getByText("Maria Salomea Skłodowska-Curie")
    ).toBeInTheDocument();
    expect(screen.getByText("ciągi")).toBeInTheDocument();
    expect(screen.getByText("Dowolony etap edukacji")).toBeInTheDocument();
  });

  it("displays button to see given problem details", () => {
    render(
      <SearchResultTile
        text="Określenie ciągu"
        tags={["ciągi", "noga"]}
        date={date}
        author="Maria Salomea Skłodowska-Curie"
        educationStage="Dowolony etap edukacji"
      />
    );

    const button = screen.queryByRole("button", { name: "Zobacz treść" });
    expect(screen.getByText("Zobacz treść")).toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });
});
