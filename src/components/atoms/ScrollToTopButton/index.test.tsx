import { screen } from "@testing-library/react";

import { testRenderer } from "../../../setupTests";
import ScrollToTopButton from "./index";

describe("<ScrollToTopButtom />", () => {
  it("doesn't display ScrollButton when the page is first render", async () => {
    testRenderer(<ScrollToTopButton />);

    expect(screen.queryByTitle(/scrollIconTitle/)).not.toBeVisible();
  });
});
