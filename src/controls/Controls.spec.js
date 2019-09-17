// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Controls from "./Controls";

test("Controls gives buttons to toggle closed-locked states...", () => {
  const { getAllByRole } = render(<Controls />);
  getAllByRole("button");
});

describe("controls component tests..", () => {
  it("should render controls component...", () => {
    render(<Controls />);
  });
  it('should render "Lock Gate" and "Close Gate" when locked-closed are false...', () => {
    const { getByText } = render(<Controls closed={false} locked={false} />);
    getByText(/lock gate/i);
    getByText(/close gate/i);
  });
});

describe("component changes button text for state changes if clicked", () => {
  it("should display closed", () => {
    const locked = render(<Controls locked={false} />);
    const closed = locked.getByText(/close gate/i);

    fireEvent.click(closed);
    locked.findByText(/closed/i);
  });
  it("should display locked", () => {
    const lockedAndLoaded = render(<Controls locked={false} />);
    const locked = lockedAndLoaded.getByText(/lock gate/i);

    fireEvent.click(locked);
    lockedAndLoaded.findByText(/locked/i);
  });
  it("should display unlocked", () => {
    const lockedAndLoaded = render(<Controls locked={true} />);
    const locked = lockedAndLoaded.getByText(/unlock gate/i);

    fireEvent.click(locked);
    lockedAndLoaded.findByText(/unlocked/i);
  });
  it("should display open", () => {
    const lockedAndLoaded = render(<Controls closed={true} />);
    const open = lockedAndLoaded.getByText(/open gate/i);

    fireEvent.click(open);
    lockedAndLoaded.findByText(/open/i);
  });
});

describe("toggle button the closed and locked states.", () => {
  it("should disable locked button", () => {
    const lockedAndLoaded = render(<Controls locked={false} closed={false} />);
    const button = lockedAndLoaded.getByText(/lock gate/i);
    expect(button.disabled).toBe(true);
  });
  it("should disable closed button", () => {
    const lockedAndLoaded = render(<Controls locked={true} closed={true} />);
    const button = lockedAndLoaded.getByText(/open gate/i);
    expect(button.disabled).toBe(true);
  });
});
