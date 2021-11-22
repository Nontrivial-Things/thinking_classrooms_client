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

  it("should show suggestions list matching  input target", () => {
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

  //   it("displays given text in tag", () => {
  //     render(<Tag text="ciągi" />);
  //     const button = screen.queryByRole("button", { name: /Usuń tag/i });

  //     expect(screen.getByText("ciągi")).toBeInTheDocument();
  //     expect(button).not.toBeInTheDocument();
  //   });

  //   it("displays given text in tag and a remove tag button", () => {
  //     render(<Tag text="ciągi" isDroppable={true} />);
  //     const button = screen.queryByRole("button", { name: /Usuń tag/i });

  //     expect(screen.getByText("ciągi")).toBeInTheDocument();
  //     expect(button).toBeInTheDocument();
  //   });
});
