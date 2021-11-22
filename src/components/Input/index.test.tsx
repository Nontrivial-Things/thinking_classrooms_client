import { render, screen, fireEvent, within } from "@testing-library/react";

import Input from "./index";

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

    const item = screen.getByRole("listitem", { name: "Alligator" });
    console.log(item);

    fireEvent.change(input, { target: { value: "lo" } });
    expect(input.value).toBe("Alligator");
  });
});
