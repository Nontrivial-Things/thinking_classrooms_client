import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { testRenderer } from "../../../setupTests";
import ProblemsPage from "./index";

describe("<ProblemsPage/>", () => {
  it("displays inputted value", async () => {
    testRenderer(<ProblemsPage />);

    const input = (await screen.findByLabelText(
      "inputPlaceholder"
    )) as HTMLInputElement;
    expect(input.value).toBe("");

    userEvent.type(input, "Good Day");

    expect(input.value).toBe("Good Day");
  });

  it("should show suggestions list matching input value", async () => {
    testRenderer(<ProblemsPage />);

    const input = (await screen.findByLabelText(
      "inputPlaceholder"
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
    testRenderer(<ProblemsPage />);

    const input = (await screen.findByLabelText(
      "inputPlaceholder"
    )) as HTMLInputElement;

    userEvent.type(input, "Oce");

    const list = await screen.findByRole("listbox");
    const { findAllByRole } = within(list);
    const suggestions = await findAllByRole("listitem");
    const firstSuggestion = suggestions[0];

    expect(firstSuggestion).toHaveTextContent("ocean");
    userEvent.click(firstSuggestion);

    const containerWithPickedTag = (await screen.findByLabelText(
      "filterByTagInput"
    )) as HTMLInputElement;
    expect(containerWithPickedTag).toBeInTheDocument();
    expect(containerWithPickedTag).toHaveTextContent("ocean");
  });

  it("should display remove button in input field only when the input value is not empty", async () => {
    testRenderer(<ProblemsPage />);

    const input = (await screen.findByLabelText(
      "inputPlaceholder"
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
    testRenderer(<ProblemsPage />);
    const input = (await screen.findByLabelText(
      "inputPlaceholder"
    )) as HTMLInputElement;

    userEvent.type(input, "Oc");
    const suggestions = await screen.findAllByRole("listitem");
    expect(suggestions).toHaveLength(1);
    const firstSuggestion = suggestions[0];
    expect(firstSuggestion).toHaveTextContent("ocean");
    userEvent.type(input, "{arrowdown}");
    userEvent.type(input, "{enter}");

    const pickedTag = (await screen.findByLabelText(
      "filterByTagInput"
    )) as HTMLInputElement;
    expect(pickedTag).toBeInTheDocument();
    expect(pickedTag).toHaveTextContent("ocean");
  });

  it("should display search icon on tag suggestion", async () => {
    testRenderer(<ProblemsPage />);

    const input = (await screen.findByLabelText(
      "inputPlaceholder"
    )) as HTMLInputElement;

    userEvent.type(input, "Oc");
    const suggestions = await screen.findAllByRole("listitem");
    const firstSuggestion = suggestions[0];
    expect(firstSuggestion).toHaveTextContent("ocean");
    expect(screen.getByLabelText("searchByTagIcon")).toBeInTheDocument();
  });

  it("should display problem suggestion", async () => {
    testRenderer(<ProblemsPage />);

    const input = (await screen.findByLabelText(
      "inputPlaceholder"
    )) as HTMLInputElement;

    userEvent.type(input, "F");
    const suggestions = await screen.findAllByRole("listitem");
    const firstSuggestion = suggestions[0];
    expect(firstSuggestion).toHaveTextContent("Foki");
    expect(screen.queryByLabelText("searchByTagIcon")).not.toBeInTheDocument();
  });

  it("filters problems by chosen tag and shows problems' count", async () => {
    testRenderer(<ProblemsPage />);

    expect(await screen.findByText("searchResults (4)")).toBeInTheDocument();

    const input = await screen.findByLabelText("inputPlaceholder");
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
    expect(await screen.findByText("searchResults (2)")).toBeInTheDocument();
  });

  xit("displays zero results view when result count = 0", async () => {
    testRenderer(<ProblemsPage />);

    const input = (await screen.findByLabelText(
      "inputPlaceholder"
    )) as HTMLInputElement;
    userEvent.type(input, "xx");
    userEvent.type(input, "{enter}");

    expect(await screen.findByText("searchResults (0)")).toBeInTheDocument();

    expect(await screen.findByText(/Spróbuj/i)).toBeInTheDocument();
  });

  it("should display input with tag as a value and return to default input after removing tag", async () => {
    testRenderer(<ProblemsPage />);
    const input = (await screen.findByLabelText(
      "inputPlaceholder"
    )) as HTMLInputElement;

    userEvent.type(input, "J");
    const suggestions = await screen.findAllByRole("listitem");
    const firstSuggestion = suggestions[0];
    expect(firstSuggestion).toHaveTextContent("jedzenie");
    userEvent.type(input, "{arrowdown}");
    userEvent.type(input, "{enter}");

    const removeTagButton = (await screen.findByRole("button", {
      name: /Usuń tag/i,
    })) as HTMLButtonElement;
    expect(removeTagButton).toBeInTheDocument();
    userEvent.click(removeTagButton);

    const defaultInput = (await screen.findByLabelText(
      "inputPlaceholder"
    )) as HTMLInputElement;
    expect(defaultInput.value).toBe("");
  });

  it("should display input with tag and return to default problems set input after using Backspace", async () => {
    testRenderer(<ProblemsPage />);
    const input = (await screen.findByLabelText(
      "inputPlaceholder"
    )) as HTMLInputElement;

    userEvent.type(input, "J");
    const suggestions = await screen.findAllByRole("listitem");
    const firstSuggestion = suggestions[0];
    expect(firstSuggestion).toHaveTextContent("jedzenie");
    userEvent.type(input, "{arrowdown}");
    userEvent.type(input, "{enter}");

    const removeTagButton = await screen.findByRole("button", {
      name: /Usuń tag/i,
    });
    expect(removeTagButton).toBeInTheDocument();
    const inputWithTag = await screen.findByLabelText(/filterByTagInput/);
    const { findByText } = within(inputWithTag);
    const test = await findByText("jedzenie");
    userEvent.type(test, "{backspace}");

    const defaultInput = (await screen.findByLabelText(
      "inputPlaceholder"
    )) as HTMLInputElement;
    expect(defaultInput).toHaveValue("");
    expect(screen.getByText("searchResults (4)")).toBeInTheDocument();
  });
});
