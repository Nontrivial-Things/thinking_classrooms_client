import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { testRenderer } from "./setupTests";
import App from "./App";

describe("<App />", () => {
  it("navigates to 'About' page after clicking on it on header", async () => {
    testRenderer(<App />);
    const aboutPageNavLink = screen.getByText("aboutMethodPageLink");
    userEvent.click(aboutPageNavLink);

    expect(screen.getByText("Co to są Myślące Klasy?")).toBeInTheDocument();
  });

  it("navigates to main page after clicking on the logo", async () => {
    testRenderer(<App />);
    const moderatorPageNavLink = screen.getByText("moderatorPageLink");
    userEvent.click(moderatorPageNavLink);
    const logo = screen.getAllByAltText("logoAlt");
    userEvent.click(logo[0]);

    expect(screen.getByText("searchInputHeader")).toBeInTheDocument();
  });

  it("navigates to problem show after choosing suggestion using keyboard", async () => {
    testRenderer(<App />);
    const input = (await screen.findByLabelText(
      "inputPlaceholder"
    )) as HTMLInputElement;

    userEvent.type(input, "f");
    userEvent.type(input, "{arrowdown}");
    userEvent.type(input, "{enter}");

    expect(await screen.findByText("problemContent")).toBeInTheDocument();
  });

  it("navigates to problem show after clicking on suggestion", async () => {
    testRenderer(<App />);
    const input = (await screen.findByLabelText(
      "inputPlaceholder"
    )) as HTMLInputElement;

    userEvent.type(input, "p");
    const list = screen.getByRole("listbox");
    const { findAllByRole } = within(list);
    const suggestionLinks = await findAllByRole("link");
    const firstSuggestion = suggestionLinks[0];
    expect(firstSuggestion).toHaveTextContent("Maczugi keczupowe");
    userEvent.click(firstSuggestion);

    expect(await screen.findByText("problemContent")).toBeInTheDocument();
  });

  it("navigates from detailed page to problems page after clicking on back to problems list button", async () => {
    testRenderer(<App />);
    const problem = (await screen.findByText(
      "Ciągi matematyczne"
    )) as HTMLInputElement;
    userEvent.click(problem);

    const returnButton = (await screen.findByText(
      "goBackToProblemsList"
    )) as HTMLInputElement;
    userEvent.click(returnButton);

    expect(screen.getByText("searchInputHeader")).toBeInTheDocument();
  });

  it("shows problem detailed page after clicking on suggestion title", async () => {
    testRenderer(<App />);
    const problem = (await screen.findByText(
      "Ciągi matematyczne"
    )) as HTMLInputElement;
    userEvent.click(problem);

    expect(await screen.findByText("problemExtension")).toBeInTheDocument();
  });

  it("navigates to login page after clicking on 'Strefa Moderatora' on header when user is not logged in", async () => {
    testRenderer(<App />);
    const moderatorPageNavLink = screen.getByText("moderatorPageLink");
    userEvent.click(moderatorPageNavLink);

    expect(screen.getByText("loginHeader")).toBeInTheDocument();
  });

  it("doesn't log in when user provides wrong email or password", async () => {
    testRenderer(<App />);

    const moderatorPageNavLink = await screen.findByText("moderatorPageLink");
    userEvent.click(moderatorPageNavLink);

    const emailInput = (await screen.findByPlaceholderText(
      "inputEmailPlaceholder"
    )) as HTMLInputElement;
    const passwordInput = (await screen.findByPlaceholderText(
      "inputPasswordPlaceholder"
    )) as HTMLInputElement;
    const submitButton = (await screen.findByText(
      "login"
    )) as HTMLButtonElement;

    userEvent.type(emailInput, "xxx@tc.io");
    userEvent.type(passwordInput, "!Xxx112233");
    userEvent.click(submitButton);

    expect(await screen.findByText("loginErrorMessage")).toBeInTheDocument();
  });

  it("navigates to 'Strefa Moderatora' after clicking on 'Strefa Moderatora' on header when user is logged in", async () => {
    testRenderer(<App />);

    const moderatorPageNavLink = await screen.findByText("moderatorPageLink");
    userEvent.click(moderatorPageNavLink);

    const emailInput = (await screen.findByPlaceholderText(
      "inputEmailPlaceholder"
    )) as HTMLInputElement;
    const passwordInput = (await screen.findByPlaceholderText(
      "inputPasswordPlaceholder"
    )) as HTMLInputElement;
    const submitButton = (await screen.findByText(
      "login"
    )) as HTMLButtonElement;

    userEvent.type(emailInput, "kasia@tc.io");
    userEvent.type(passwordInput, "!Pass112233");
    userEvent.click(submitButton);

    userEvent.click(moderatorPageNavLink);
    expect(await screen.findByText("Witaj, moderatorze!")).toBeInTheDocument();
  });
});
