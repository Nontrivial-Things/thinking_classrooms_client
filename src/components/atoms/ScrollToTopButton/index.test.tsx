import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { testRenderer } from "../../../setupTests";
import ScrollToTopButton from "./index";

describe("<ScrollToTopButtom />", () => {
  it("doesn't display ScrollButton when the page is first render", async () => {
    testRenderer(<ScrollToTopButton />);

    expect(
      screen.queryByTitle(/Ikona przewijania strony do początku/i)
    ).not.toBeVisible();
  });

  // I think we need to test this case in the component when the button will be implemented
  xit("scroll to the top of the page", async () => {
    testRenderer(<ScrollToTopButton />);

    const scrolllButton = screen.queryByTitle(
      /Ikona przewijania strony do początku/i
    ) as HTMLElement;

    userEvent.click(scrolllButton);

    screen.debug();
  });
});
