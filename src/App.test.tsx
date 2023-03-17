import { act, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

const setup = (): void => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
};

describe('App Component', () => {
  it('should render App component without crashing', async () => {
    setup();
    await act(() =>
      expect(screen.getByTestId('app-wrapper')).toBeInTheDocument(),
    );
  });
});
