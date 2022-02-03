import { render, screen } from "@testing-library/react";

import ResultCountWrapper from "./index";

describe("ResultCountWrapper", () => {
  it("displays given count number", () => {
    render(<ResultCountWrapper count={3} />);
    expect(screen.getByText("searchResults (3)")).toBeInTheDocument();
  });
});
