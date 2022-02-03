import { render, screen } from "@testing-library/react";

import Button from "./index";

describe("<Button>", () => {
  it("renders given children for primary button", () => {
    render(<Button>Basia</Button>);
    expect(screen.getByText("Basia")).toBeInTheDocument();
  });
  it("renders given children for non primary button", () => {
    render(<Button $isPrimary={false}>Kasia</Button>);
    expect(screen.getByText("Kasia")).toBeInTheDocument();
  });

  it("renders no download icon for non primary button as a default", () => {
    render(<Button $isPrimary={false} />);
    expect(screen.queryByTitle("downloadIcon")).not.toBeInTheDocument();
  });

  it("renders download icon for non primary button when set do to so", () => {
    render(<Button $isPrimary={false} withDownloadIcon />);
    expect(screen.getByTitle("downloadIcon")).toBeInTheDocument();
  });

  it("renders active primary button as a default", () => {
    render(<Button />);
    expect(screen.getByRole("button")).not.toBeDisabled();
  });

  it("renders disabled primary button when set to do so", () => {
    render(<Button disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("renders active non primary button as a default", () => {
    render(<Button $isPrimary={false} />);
    expect(screen.getByRole("button")).not.toBeDisabled();
  });

  it("renders disabled non primary button when set to do so", () => {
    render(<Button $isPrimary={false} disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
