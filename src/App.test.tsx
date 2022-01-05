import { screen, within, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { testRenderer } from "./setupTests";
import App from "./App";

describe("<App />", () => {
  it("navigates to 'About' page after clicking on it on header", async () => {
    testRenderer(<App />);
    const aboutPageNavLink = screen.getByText(/O metodzie/i);
    userEvent.click(aboutPageNavLink);

    expect(screen.getByText("Co to są Myślące Klasy?")).toBeInTheDocument();
  });

  it("navigates to 'Moderator' page after clicking on it on header", async () => {
    testRenderer(<App />);
    const moderatorPageNavLink = screen.getByText(/Strefa moderatora/i);
    userEvent.click(moderatorPageNavLink);

    expect(screen.getByText("Witaj, moderatorze!")).toBeInTheDocument();
  });

  it("navigates to main page after clicking on the logo", async () => {
    testRenderer(<App />);
    const moderatorPageNavLink = screen.getByText(/Strefa moderatora/i);
    userEvent.click(moderatorPageNavLink);
    const logo = screen.getAllByAltText(/Logo aplikacji/i);
    userEvent.click(logo[0]);

    expect(
      screen.getByText("Szukaj problemów matematycznych")
    ).toBeInTheDocument();
  });

  it("navigates to problem show after choosing suggestion using keyboard", async () => {
    testRenderer(<App />);
    const input = (await screen.findByLabelText(
      "Szukaj problemów"
    )) as HTMLInputElement;

    userEvent.type(input, "f");
    userEvent.type(input, "{arrowdown}");
    userEvent.type(input, "{enter}");

    expect(await screen.findByText(/Treść problemu/i)).toBeInTheDocument();
  });

  it("navigates to problem show after clicking on suggestion", async () => {
    testRenderer(<App />);
    const input = (await screen.findByLabelText(
      "Szukaj problemów"
    )) as HTMLInputElement;

    userEvent.type(input, "p");
    const list = screen.getByRole("listbox");
    const { findAllByRole } = within(list);
    const suggestionLinks = await findAllByRole("link");
    const firstSuggestion = suggestionLinks[0];
    expect(firstSuggestion).toHaveTextContent("Maczugi keczupowe");
    userEvent.click(firstSuggestion);

    expect(await screen.findByText(/Treść problemu/i)).toBeInTheDocument();
  });

  it("navigates from detailed page to problems page after clicking on back to problems list button", async () => {
    testRenderer(<App />);
    const problem = (await screen.findByText(
      "Ciągi matematyczne"
    )) as HTMLInputElement;
    userEvent.click(problem);

    const returnButton = (await screen.findByText(
      "Powrót do listy problemów"
    )) as HTMLInputElement;
    userEvent.click(returnButton);

    expect(
      await screen.findByText(/Szukaj problemów matematycznych/i)
    ).toBeInTheDocument();
  });

  it("shows problem detailed page after clicking on suggestion ", async () => {
    testRenderer(<App />);
    const problem = (await screen.findByText(
      "Ciągi matematyczne"
    )) as HTMLInputElement;
    userEvent.click(problem);

    expect(
      await screen.findByText(/rozszerzenie problemu/i)
    ).toBeInTheDocument();
  });
});
