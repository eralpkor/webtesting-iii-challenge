// Test away
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Display from '../display/Display';
import Controls from '../controls/Controls';

import Dashboard from './Dashboard';


// use snapshot
test('should match snapshot', () => {
  expect(render(<Dashboard />)).toMatchSnapshot();
});
// use snapshot with container
// test("matches snapshot", () => {
//   const { container } = render(<Dashboard />);

//   expect(container).toMatchSnapshot();
// });

test('Message renders correctly', () => {
  render(<Dashboard />);
});

test('Dashboard shows Display...', () => {
  render(<Display />)
});

test('Dashboard shows Controls...', () => {
  render(<Controls />)
});

// gate defaults 
describe('Dashboard defaults', () => {
  it('Gate defaults to unlocked and open', () => {
    const dashboard = render(<Dashboard />);
    expect(dashboard.getByText(/open/i));
    expect(dashboard.getByText(/unlocked/i));
  });
  it('Gate cannot be closed or opened if it is locked', () => {
    const component = render(<Controls locked={true} closed={true} />);
    expect(component.queryByText(/close gate/i)).toBe(null);
  
    const button = component.getByText(/open gate/i);
    expect(button.disabled).toBe(true);
  });
});

// I don't see any difference between 'test' or 'describe it' except nesting
describe("Dashboard component tests", () => {
  it("should render dashboard app", () => {
    render(<Dashboard />);
  });
  
})

