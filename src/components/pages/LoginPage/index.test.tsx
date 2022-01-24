import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { testRenderer } from "../../../setupTests";

import LoginPage from "./index";

describe("<LoginPage />", () => {
  it("displays email inputted value", async () => {
    testRenderer(<LoginPage />);
    const input = (await screen.findByLabelText(
      "inputEmailPlaceholder"
    )) as HTMLInputElement;

    expect(input.value).toBe("");

    userEvent.type(input, "test@mail.com");

    expect(input.value).toBe("test@mail.com");
  });

  it("displays error message when inputted email didn't pass validation", async () => {
    testRenderer(<LoginPage />);
    const input = (await screen.findByLabelText(
      "inputEmailPlaceholder"
    )) as HTMLInputElement;

    userEvent.type(input, "test");

    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("displays password inputted value", async () => {
    testRenderer(<LoginPage />);
    const input = (await screen.findByLabelText(
      "inputPasswordPlaceholder"
    )) as HTMLInputElement;

    expect(input.value).toBe("");

    userEvent.type(input, "test123");

    expect(input.value).toBe("test123");
  });
});
