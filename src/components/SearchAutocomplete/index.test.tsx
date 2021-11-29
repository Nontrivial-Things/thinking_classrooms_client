import {
  render,
  screen,
  fireEvent,
  within,
  cleanup,
} from "@testing-library/react";
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
    // expect(screen.getAllByRole("listbox")).not.toBeInTheDocument;

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
    fireEvent.change(input, { target: { value: "All" } });
    expect(input.value).toBe("All");

    const list = screen.getByRole("listbox");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");

    expect(items.length).toBe(1);

    const item = screen.getByText("Alligator").textContent;

    fireEvent.change(input, { target: { value: item } });
    expect(input.value).toBe("Alligator");
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
    // const list = screen.getByRole("list");
    // const { getAllByRole } = within(list);
    // const items = getAllByRole("listitem");

    // fireEvent.keyDown(input, { key: "ArrowDown", code: 40 });

    // this one is creating snapshots - I would like to talk about it :)
    fireEvent.keyDown(input, { key: "Enter", code: 13 });
    expect(input.value).toBe("Bask");
  });
});
