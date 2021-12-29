import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { testRenderer } from "./setupTests";
import App from "./App";

describe("App", () => {
  it("navigates to 'O metodzie' page after clicking on it on header", async () => {
    testRenderer(<App />);
    const aboutPage = screen.getByText(/O metodzie/i);
    userEvent.click(aboutPage);

    expect(screen.getByText("Co to są Myślące Klasy?")).toBeInTheDocument();
  });

  it("navigates to 'Strefa moderatora' page after clicking on it on header", async () => {
    testRenderer(<App />);
    const moderatorPage = screen.getByText(/Strefa moderatora/i);
    userEvent.click(moderatorPage);

    expect(screen.getByText("Witaj, moderatorze!")).toBeInTheDocument();
  });

  it("navigates to main page after clicking on the logo", async () => {
    testRenderer(<App />);
    const moderatorPage = screen.getByText(/Strefa moderatora/i);
    userEvent.click(moderatorPage);
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

    expect(await screen.findByText(/Tytuł: Foki/i)).toBeInTheDocument();
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

    expect(
      await screen.findByText(/Tytuł: Maczugi keczupowe/i)
    ).toBeInTheDocument();
  });
});
