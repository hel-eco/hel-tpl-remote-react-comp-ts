import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn hel-micro link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn hel-micro/i);
  expect(linkElement).toBeInTheDocument();
});