import { screen } from "@testing-library/react";

import { testRenderer } from "../../../setupTests";
import ZeroResults from "../../molecules/ZeroResults";

describe("<ZeroResults />", () => {
  const setTag = jest.fn();
  const setSearchTerm = jest.fn();
  it("displays no results informaction and possible tags to choose", async () => {
    testRenderer(<ZeroResults setTag={setTag} setSearchTerm={setSearchTerm} />);

    expect(await screen.findByText("zeroResultsHeader")).toBeInTheDocument();
    expect(await screen.findByText("zeroResultsText")).toBeInTheDocument();
    expect(await screen.findByText(/jedzenie/i)).toBeInTheDocument();
  });
});
