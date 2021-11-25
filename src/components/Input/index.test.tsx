import {
  render,
  screen,
  fireEvent,
  within,
  cleanup,
} from "@testing-library/react";
import Input from "./index";
import { Suggestion, SuggestionList } from "./styledComponents";

describe("Input component", () => {
  it("should allow letters to be inputted", () => {
    render(
      <Input
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

    let input = screen.getByLabelText("search-input") as HTMLInputElement;
    expect(input.value).toBe("");
    fireEvent.change(input, { target: { value: "Good Day" } });
    expect(input.value).toBe("Good Day");
  });

  it("should show suggestions list matching input target", () => {
    render(
      <Input
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
    let input = screen.getByLabelText("search-input") as HTMLInputElement;

    expect(input.value).toBe("");
    fireEvent.change(input, { target: { value: "e" } });
    expect(input.value).toBe("e");

    const list = screen.getByRole("list");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(4);
  });

  it("should show in input field chosen suggestion", () => {
    render(
      <Input
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
    let input = screen.getByLabelText("search-input") as HTMLInputElement;

    expect(input.value).toBe("");
    fireEvent.change(input, { target: { value: "All" } });
    expect(input.value).toBe("All");

    const list = screen.getByRole("list");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");

    expect(items.length).toBe(1);

    const item = screen.getByText("Alligator").textContent;

    fireEvent.change(input, { target: { value: item } });
    expect(input.value).toBe("Alligator");
  });

  it("shouldn't show remove button in input field", () => {
    render(
      <Input
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
    let input = screen.getByLabelText("search-input") as HTMLInputElement;

    expect(input.value).toBe("");
    const button = screen.queryByRole("button", { name: /Remove button/i });

    expect(button).not.toBeInTheDocument();
  });

  it("should show remove button and after click remove text from input field", () => {
    render(
      <Input
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
    let input = screen.getByLabelText("search-input") as HTMLInputElement;

    expect(input.value).toBe("");
    fireEvent.change(input, { target: { value: "B" } });
    expect(input.value).toBe("B");

    const button = screen.queryByRole("button", {
      name: /Remove button/i,
    }) as HTMLButtonElement;

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(input.value).toBe("");
  });

  it("should key press correctly", () => {
    render(
      <Input
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

    let input = screen.getByLabelText("search-input") as HTMLInputElement;
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
