// Test away!
import React from 'react';
import { render } from '@testing-library/react';

import Controls from './Controls';

test('Controls gives buttons to toggle closed-locked states...', () => {
  const { getAllByRole } = render(<Controls />);
  getAllByRole('button');
});

describe('controls component tests..', () => {
  it('should render controls component...', () => {
    render(<Controls />);
  });
  it('should render "Lock Gate" and "Close Gate" when locked-closed are false...', () => {
    const { getByText } = render(<Controls closed={false} locked={false} />);
    getByText(/lock gate/i);
    getByText(/close gate/i);
  });
  
});