import { screen, fireEvent } from "@testing-library/react";
import { testRenderer } from "../../../setupTests";

import ZeroResults from "./index";
import ProblemIndex from "../../pages/ProblemIndex/index";

describe("<ZeroResults />", () => {
  const setTag = jest.fn();
  const setSearchTerm = jest.fn();
  it("displays no results informaction and possible tags to choose", async () => {
    testRenderer(<ZeroResults setTag={setTag} setSearchTerm={setSearchTerm} />);

    expect(await screen.findByText(/Brak wyników/i)).toBeInTheDocument();
    expect(await screen.findByText(/Spróbuj wyszukać/i)).toBeInTheDocument();

    let tag = await screen.findByText(/Jedzenie/i);
    fireEvent.click(tag);
    testRenderer(<ProblemIndex />);

    expect(
      await screen.findByRole("heading", {
        name: "Maczugi keczupowe",
      })
    ).toBeInTheDocument();
  });
});
