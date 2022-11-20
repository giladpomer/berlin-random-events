import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main title', () => {
  render(<App />);
  const mainTitleElement = screen.getByText(/berlin random events/i);
  expect(mainTitleElement).toBeInTheDocument();
});
