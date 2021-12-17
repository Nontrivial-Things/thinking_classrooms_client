import { screen, fireEvent } from "@testing-library/react";
import { testRenderer } from "../../../setupTests";

import ZeroResults from "./index";
import ProblemIndex from "../../pages/ProblemIndex/index";

describe("<ZeroResults />", () => {
  const setTag = jest.fn();
  const setSearchTerm = jest.fn();
  it("displays image", async () => {
    testRenderer(<ZeroResults setTag={setTag} setSearchTerm={setSearchTerm} />);

    expect(
      await screen.findByLabelText("Dziewczyna patrząca przez lornetkę")
    ).toBeInTheDocument();

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
