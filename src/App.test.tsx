import { render } from '@testing-library/react';
import React from 'react';
import { App } from './App';

test('renders App component', () => {
  const { container } = render(<App />);

  const boxes = container.getElementsByClassName('App');
  expect(boxes).toHaveLength(1);
});
