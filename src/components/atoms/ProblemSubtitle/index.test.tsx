import { screen } from "@testing-library/react";
import { testRenderer } from "../../../setupTests";

import ProblemSubtitle from "./index";

describe("<ProblemSubtitle />", () => {
  it("displays problem subtitle", () => {
    testRenderer(<ProblemSubtitle subtitle={"Podtytuł"} color={"blue"} />);

    expect(screen.queryByText(/Podtytuł/i)).toBeInTheDocument();
  });
});
