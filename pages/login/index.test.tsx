import { screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { testRenderer } from "../../../setupTests";

import LoginPage from ".";

describe("<LoginPage />", () => {
  it("displays inputted email value", async () => {
    testRenderer(<LoginPage />);
    const emailInput = (await screen.findByPlaceholderText(
      "inputEmailPlaceholder"
    )) as HTMLInputElement;

    expect(emailInput.value).toBe("");

    userEvent.type(emailInput, "test@mail.com");

    expect(emailInput.value).toBe("test@mail.com");
  });

  it("displays inputted password value", async () => {
    testRenderer(<LoginPage />);
    const passwordInput = (await screen.findByPlaceholderText(
      "inputPasswordPlaceholder"
    )) as HTMLInputElement;

    expect(passwordInput.value).toBe("");

    userEvent.type(passwordInput, "test123");

    expect(passwordInput.value).toBe("test123");
  });

  it("shows password after clicking on an eye icon", async () => {
    testRenderer(<LoginPage />);
    const passwordInput = (await screen.findByPlaceholderText(
      "inputPasswordPlaceholder"
    )) as HTMLInputElement;

    userEvent.type(passwordInput, "test");
    const eyeIcon = await screen.findByLabelText("showPasswordIconAlt");
    userEvent.click(eyeIcon);

    expect(passwordInput).toHaveAttribute("type", "text");
  });

  it("displays checked icon after clicking on checkbox ", async () => {
    testRenderer(<LoginPage />);
    const checkbox = await screen.findByRole("checkbox");
    fireEvent.click(checkbox, {
      target: { checked: false },
    });
    expect(checkbox).toBeChecked();
  });
});
