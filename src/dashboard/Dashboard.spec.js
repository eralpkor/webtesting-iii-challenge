// Test away
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Display from '../display/Display';
import Controls from '../controls/Controls';

import Dashboard from './Dashboard';

test('Message renders correctly', () => {
  render(<Dashboard />);
});

test('Dashboard shows Display...', () => {
  render(<Display />)
});

test('Dashboard shows Controls...', () => {
  render(<Controls />)
});



test("matches snapshot", () => {
  const { container } = render(<Dashboard />);

  expect(container).toMatchSnapshot();
});

// I don't see any difference except nesting
describe("Dashboard component tests", () => {
  it("should render dashboard app", () => {
    render(<Dashboard />);
  });
  
})