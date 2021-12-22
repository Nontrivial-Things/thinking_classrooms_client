import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { testRenderer } from "../../../setupTests";
import ZeroResults from "./index";

describe("<ZeroResults />", () => {
  const setTag = jest.fn();
  const setSearchTerm = jest.fn();
  it("displays no results informaction and possible tags to choose", async () => {
    testRenderer(<ZeroResults setTag={setTag} setSearchTerm={setSearchTerm} />);

    expect(await screen.findByText(/Brak wyników/i)).toBeInTheDocument();
    expect(await screen.findByText(/Spróbuj wyszukać/i)).toBeInTheDocument();
    expect(await screen.findByText(/Jedzenie/i)).toBeInTheDocument();
  });
});
