import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { testRenderer } from "../../../setupTests";

import LoginPage from "./index";

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

  it("displays error message when inputted email didn't pass validation", async () => {
    testRenderer(<LoginPage />);
    const emailInput = (await screen.findByPlaceholderText(
      "inputEmailPlaceholder"
    )) as HTMLInputElement;

    userEvent.type(emailInput, "test");
    userEvent.type(emailInput, "{enter}");

    expect(screen.queryByText(/Błędny email/i)).not.toBeInTheDocument();
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

    userEvent.type(passwordInput, "test123");
    const eyeIcon = screen.findByAltText("showPasswordIconAlt");

    expect(passwordInput.value).toBe("test123");
  });

  it("displays error message when inputted password didn't pass validation", async () => {
    testRenderer(<LoginPage />);
    const passwordInput = (await screen.findByPlaceholderText(
      "inputPasswordPlaceholder"
    )) as HTMLInputElement;

    userEvent.type(passwordInput, "test");
    userEvent.type(passwordInput, "{enter}");

    expect(screen.queryByText(/Błędne hasło/i)).not.toBeInTheDocument();
  });
});
