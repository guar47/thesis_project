import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the correct headline', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Word frequency analysis tool/i);

  expect(headerElement).toBeInTheDocument();
});
