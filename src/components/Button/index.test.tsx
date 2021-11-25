import { render, screen } from "@testing-library/react";

import ButtonSecondary from "./index";

describe("<ButtonSecondary>", () => {
  it("renders given children", () => {
    render(<ButtonSecondary>Kasia</ButtonSecondary>);
    expect(screen.getByText("Kasia")).toBeInTheDocument();
  });

  it("renders no download icon as a default", () => {
    render(<ButtonSecondary />);
    expect(screen.queryByTitle(/Ikona Pobierania/i)).not.toBeInTheDocument();
  });

  it("renders download icon when set do to so", () => {
    render(<ButtonSecondary withDownloadIcon />);
    expect(screen.getByTitle(/Ikona Pobierania/i)).toBeInTheDocument();
  });

  it("renders active button as a default", () => {
    render(<ButtonSecondary />);
    expect(screen.getByRole("button")).not.toBeDisabled();
  });

  it("renders disabled button when set to do so", () => {
    render(<ButtonSecondary disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
