import { render, screen, fireEvent, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchAutocomplete from "./index";

describe("Input component", () => {
  it("displays inputted value", () => {
    render(
      <SearchAutocomplete
        suggestions={[
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands",
        ]}
      />
    );
    let input = screen.getByLabelText("Szukaj problemów") as HTMLInputElement;
    expect(input.value).toBe("");

    fireEvent.change(input, { target: { value: "Good Day" } });

    expect(input.value).toBe("Good Day");
  });

  it("should show suggestions list matching input value", () => {
    render(
      <SearchAutocomplete
        suggestions={[
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands",
        ]}
      />
    );
    let input = screen.getByLabelText("Szukaj problemów") as HTMLInputElement;
    expect(input.value).toBe("");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: "e" } });

    expect(input.value).toBe("e");
    const list = screen.getByRole("listbox");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(4);
  });

  it("should display picked suggestion as input value", () => {
    render(
      <SearchAutocomplete
        suggestions={[
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands",
        ]}
      />
    );
    let input = screen.getByLabelText("Szukaj problemów") as HTMLInputElement;
    expect(input.value).toBe("");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: "All" } });
    expect(input).toHaveValue("All");
    const list = screen.getByRole("listbox");
    const { getAllByRole } = within(list);
    const suggestions = getAllByRole("listitem");
    expect(suggestions.length).toBe(1);
    const suggestion = screen.getByText("Alligator");
    userEvent.click(suggestion);

    expect(input).toHaveValue("Alligator");
  });

  it("should display remove button in input field only when the input value is not empty", () => {
    render(
      <SearchAutocomplete
        suggestions={[
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands",
        ]}
      />
    );
    let input = screen.getByLabelText("Szukaj problemów") as HTMLInputElement;
    expect(input.value).toBe("");
    const button = screen.queryByRole("button", {
      name: /Remove button/i,
    });
    expect(button).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: "B" } });
    expect(input.value).toBe("B");

    const removeButton = screen.queryByRole("button", {
      name: /Remove button/i,
    }) as HTMLButtonElement;
    expect(removeButton).toBeInTheDocument();
    fireEvent.click(removeButton);
    expect(input.value).toBe("");
  });

  it("should key press correctly", () => {
    render(
      <SearchAutocomplete
        suggestions={[
          "Alligator",
          "Bask",
          "Crocodilian",
          "Death Roll",
          "Eggs",
          "Jaws",
          "Reptile",
          "Solitary",
          "Tail",
          "Wetlands",
        ]}
      />
    );
    let input = screen.getByLabelText("Szukaj problemów") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "B" } });
    const items = screen.getAllByRole("listitem");
    expect(screen.getByText("Bask")).toBeInTheDocument();
    expect(items).toHaveLength(1);

    fireEvent.keyDown(input, { key: "ArrowDown", code: 40 });
    fireEvent.keyDown(input, { key: "Enter", code: 13 });
    expect(input.value).toBe("Bask");
  });
});