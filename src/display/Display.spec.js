// Test away!
import React from "react";
import { render } from "@testing-library/react";

import Display from "./Display.js";

describe('display component testing...', () => {
  it('Should render without error', () => {
    render(<Display />);
  });
  it('Should have open and unlocked text and they should be false "closed-unlocked"', () => {
    const { getByText } = render(<Display closed={false} locked={false} />);

    getByText(/open/i);
    getByText(/unlocked/i)
  });
  it('should have "true-true" when both locked and closed', () => {
    const { getByText } = render(<Display closed={true} locked={true} />);

    getByText(/closed/i);
    getByText(/locked/i);
  });
  it('should have "false-true" when text open and locked', () => {
    const { getByText } = render(<Display closed={false} locked={true} />);

    getByText(/locked/i);
    getByText(/open/i);
  });
  it('should have "true-false" when text is closed and unlocked', () => {
    const { getByText } = render (<Display closed={true} locked={false} />);

    getByText(/unlocked/i);
    getByText(/closed/i);
  });

});

test('testing test', () => {
  const { getByText } = render (<Display closed={true} locked={false} />);

  getByText(/unlocked/i);
  getByText(/closed/i);
});

test('it should have when locked or closed use the red-led class', () => {
  const { getByText } = render(<Display closed={true} locked={true} />);
  const closed = getByText(/closed/i);
  const locked = getByText(/locked/i);

  expect(locked.classList).toContain('red-led');
})