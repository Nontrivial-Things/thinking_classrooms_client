import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { debug } from "util";
import { testRenderer } from "../../../setupTests";

import ProblemIndex from "./index";

describe("<ProblemIndex/>", () => {
  it("displays inputted value", async () => {
    testRenderer(<ProblemIndex />);

    const input = (await screen.findByLabelText(
      "Szukaj problemów"
    )) as HTMLInputElement;
    expect(input.value).toBe("");

    userEvent.type(input, "Good Day");

    expect(input.value).toBe("Good Day");
  });

  it("should show suggestions list matching input value", async () => {
    testRenderer(<ProblemIndex />);

    const input = (await screen.findByLabelText(
      "Szukaj problemów"
    )) as HTMLInputElement;
    expect(input.value).toBe("");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();

    userEvent.type(input, "c");

    expect(input.value).toBe("c");
    const list = await screen.findByRole("listbox");
    const { findAllByRole } = within(list);
    const items = await findAllByRole("listitem");
    expect(items.length).toBe(6);
  });

  it("should display picked suggestion as input value", async () => {
    testRenderer(<ProblemIndex />);

    const input = (await screen.findByLabelText(
      "Szukaj problemów"
    )) as HTMLInputElement;

    userEvent.type(input, "Oce");

    const list = await screen.findByRole("listbox");
    const { findAllByRole } = within(list);
    const suggestions = await findAllByRole("listitem");
    const firstSuggestion = suggestions[0];

    expect(firstSuggestion).toHaveTextContent("Ocean");
    userEvent.click(firstSuggestion);

    const containerWithPickedTag = (await screen.findByLabelText(
      "Input filtrujący po tagu"
    )) as HTMLInputElement;
    expect(containerWithPickedTag).toBeInTheDocument();
    expect(containerWithPickedTag).toHaveTextContent("Ocean");
  });

  it("should display remove button in input field only when the input value is not empty", async () => {
    testRenderer(<ProblemIndex />);

    const input = (await screen.findByLabelText(
      "Szukaj problemów"
    )) as HTMLInputElement;
    const removeButtonNotVisible = screen.queryByRole("button", {
      name: /Remove button/i,
    });
    expect(removeButtonNotVisible).not.toBeInTheDocument();

    userEvent.type(input, "B");
    expect(input.value).toBe("B");

    const removeButton = screen.getByRole("button", {
      name: /Remove button/i,
    }) as HTMLButtonElement;
    expect(removeButton).toBeInTheDocument();
    userEvent.click(removeButton);
    expect(input.value).toBe("");
  });

  it("should key press correctly", async () => {
    testRenderer(<ProblemIndex />);
    const input = (await screen.findByLabelText(
      "Szukaj problemów"
    )) as HTMLInputElement;

    userEvent.type(input, "Oc");
    const suggestions = await screen.findAllByRole("listitem");
    expect(suggestions).toHaveLength(1);
    const firstSuggestion = suggestions[0];
    expect(firstSuggestion).toHaveTextContent("Ocean");
    userEvent.type(input, "{arrowdown}");
    userEvent.type(input, "{enter}");

    const pickedTag = (await screen.findByLabelText(
      "Input filtrujący po tagu"
    )) as HTMLInputElement;
    expect(pickedTag).toBeInTheDocument();
    expect(pickedTag).toHaveTextContent("Ocean");
  });

  it("should display search icon on tag suggestion", async () => {
    testRenderer(<ProblemIndex />);

    const input = (await screen.findByLabelText(
      "Szukaj problemów"
    )) as HTMLInputElement;

    userEvent.type(input, "Oc");
    const suggestions = await screen.findAllByRole("listitem");
    const firstSuggestion = suggestions[0];
    expect(firstSuggestion).toHaveTextContent("Ocean");
    expect(
      screen.getByLabelText("Ikona wyszukiwania po tagu")
    ).toBeInTheDocument();
  });

  it("should display problem suggestion", async () => {
    testRenderer(<ProblemIndex />);

    const input = (await screen.findByLabelText(
      "Szukaj problemów"
    )) as HTMLInputElement;

    userEvent.type(input, "F");
    const suggestions = await screen.findAllByRole("listitem");
    const firstSuggestion = suggestions[0];
    expect(firstSuggestion).toHaveTextContent("Foki");
    expect(
      screen.queryByLabelText("Ikona wyszukiwania po tagu")
    ).not.toBeInTheDocument();
  });

  it("filters problems by chosen tag and shows problems' count", async () => {
    testRenderer(<ProblemIndex />);

    expect(
      await screen.findByText("Wyniki wyszukiwania (4)")
    ).toBeInTheDocument();

    const input = await screen.findByLabelText("Szukaj problemów");
    userEvent.type(input, "Ci");
    userEvent.type(input, "{arrowdown}");
    userEvent.type(input, "{enter}");

    expect(
      await screen.findByRole("heading", {
        name: "Ciągi matematyczne",
      })
    ).toBeInTheDocument();
    expect(
      await screen.findByRole("heading", {
        name: "Ciągi muzyczne",
      })
    ).toBeInTheDocument();
    expect(
      await screen.queryByRole("heading", {
        name: "Maczugi keczupowe",
      })
    ).not.toBeInTheDocument();
    expect(
      await screen.findByText("Wyniki wyszukiwania (2)")
    ).toBeInTheDocument();
  });

  it("displays zero results view when result count = 0", async () => {
    testRenderer(<ProblemIndex />);

    const input = (await screen.findByLabelText(
      "Szukaj problemów"
    )) as HTMLInputElement;
    userEvent.type(input, "xx");
    userEvent.type(input, "{enter}");

    expect(
      await screen.findByText("Wyniki wyszukiwania (0)")
    ).toBeInTheDocument();

    expect(await screen.findByText(/Spróbuj/i)).toBeInTheDocument();
  });

  it("should display input with tag as a value and return to default input after removing tag", async () => {
    testRenderer(<ProblemIndex />);
    let input = (await screen.findByLabelText(
      "Szukaj problemów"
    )) as HTMLInputElement;

    userEvent.type(input, "J");
    const suggestions = await screen.findAllByRole("listitem");
    const firstSuggestion = suggestions[0];
    expect(firstSuggestion).toHaveTextContent("Jedzenie");
    userEvent.type(input, "{arrowdown}");
    userEvent.type(input, "{enter}");

    const removeTagButton = (await screen.findByRole("button", {
      name: /Usuń tag/i,
    })) as HTMLButtonElement;
    expect(removeTagButton).toBeInTheDocument();
    userEvent.click(removeTagButton);

    const defaultInput = (await screen.findByLabelText(
      "Szukaj problemów"
    )) as HTMLInputElement;
    expect(defaultInput.value).toBe("");
  });

  it("should display input with tag and return to default problems set input after using Backspace", async () => {
    testRenderer(<ProblemIndex />);
    const input = (await screen.findByLabelText(
      "Szukaj problemów"
    )) as HTMLInputElement;

    userEvent.type(input, "J");
    const suggestions = await screen.findAllByRole("listitem");
    const firstSuggestion = suggestions[0];
    expect(firstSuggestion).toHaveTextContent("Jedzenie");
    userEvent.type(input, "{arrowdown}");
    userEvent.type(input, "{enter}");

    const removeTagButton = await screen.findByRole("button", {
      name: /Usuń tag/i,
    });
    expect(removeTagButton).toBeInTheDocument();
    const inputWithTag = await screen.findByLabelText(
      "Input filtrujący po tagu"
    );
    const { findByText } = within(inputWithTag);
    const test = await findByText("Jedzenie");
    userEvent.type(test, "{backspace}");

    const defaultInput = (await screen.findByLabelText(
      "Szukaj problemów"
    )) as HTMLInputElement;
    expect(defaultInput).toHaveValue("");
    expect(screen.getByText("Wyniki wyszukiwania (4)")).toBeInTheDocument();
  });
});
