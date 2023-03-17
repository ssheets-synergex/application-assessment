import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

test('renders App component', () => {
  const { container } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  const boxes = container.getElementsByClassName('App');
  expect(boxes).toHaveLength(1);
});
