import { screen, fireEvent, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { testRenderer } from "../../../setupTests";
import SearchAutocomplete from "./index";

describe("Input component", () => {
  it("displays inputted value", async () => {
    testRenderer(<SearchAutocomplete setTag={() => {}} />);

    let input = (await screen.findByLabelText(
      "Szukaj problemów"
    )) as HTMLInputElement;
    expect(input.value).toBe("");

    fireEvent.change(input, { target: { value: "Good Day" } });

    expect(input.value).toBe("Good Day");
  });

  it("should show suggestions list matching input value", async () => {
    testRenderer(<SearchAutocomplete setTag={() => {}} />);

    let input = (await screen.findByLabelText(
      "Szukaj problemów"
    )) as HTMLInputElement;
    expect(input.value).toBe("");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: "c" } });

    expect(input.value).toBe("c");
    const list = await screen.findByRole("listbox");
    const { findAllByRole } = within(list);
    const items = await findAllByRole("listitem");
    expect(items.length).toBe(6);
  });

  it("should display picked suggestion as input value", async () => {
    testRenderer(<SearchAutocomplete setTag={() => {}} />);
    let input = (await screen.findByLabelText(
      "Szukaj problemów"
    )) as HTMLInputElement;
    expect(input.value).toBe("");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: "Oce" } });
    expect(input).toHaveValue("Oce");
    const list = await screen.findByRole("listbox");
    const { findAllByRole } = within(list);
    const suggestions = await findAllByRole("listitem");
    expect(suggestions.length).toBe(1);
    const suggestion = screen.getByText("Ocean");
    userEvent.click(suggestion);

    expect(input).toHaveValue("Ocean");
  });

  it("should display remove button in input field only when the input value is not empty", async () => {
    testRenderer(<SearchAutocomplete setTag={() => {}} />);
    let input = (await screen.findByLabelText(
      "Szukaj problemów"
    )) as HTMLInputElement;
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

  it("should key press correctly", async () => {
    testRenderer(<SearchAutocomplete setTag={() => {}} />);
    let input = (await screen.findByLabelText(
      "Szukaj problemów"
    )) as HTMLInputElement;

    fireEvent.change(input, { target: { value: "Oc" } });
    const items = await screen.findAllByRole("listitem");
    expect(screen.getByText("Ocean")).toBeInTheDocument();
    expect(items).toHaveLength(1);

    fireEvent.keyDown(input, { key: "ArrowDown", code: 40 });
    fireEvent.keyDown(input, { key: "Enter", code: 13 });
    expect(input.value).toBe("Ocean");
  });
});
