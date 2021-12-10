import { screen, fireEvent } from "@testing-library/react";
import { testRenderer } from "../../../setupTests";

import ProblemIndex from "./index";

describe("<ProblemIndex/>", () => {
  it("filters problems by chosen tag and shows problems' count", async () => {
    testRenderer(<ProblemIndex />);

    expect(
      await screen.findByText("Wyniki wyszukiwania (4)")
    ).toBeInTheDocument();

    let input = await screen.findByLabelText("Szukaj problemów");
    fireEvent.change(input, { target: { value: "Ci" } });
    fireEvent.keyDown(input, { key: "ArrowDown", code: 40 });
    fireEvent.keyDown(input, { key: "Enter", code: 13 });

    expect(
      await screen.findByRole("heading", {
        name: "Ciągi matematyczne",
      })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("heading", {
        name: "Ciągi muzyczne",
      })
    ).toBeInTheDocument();
    expect(
      await screen.queryByRole("heading", {
        name: "Maczugi keczupowe",
      })
    ).not.toBeInTheDocument();
    expect(
      await screen.findByText("Wyniki wyszukiwania (2)")
    ).toBeInTheDocument();
  });
});
