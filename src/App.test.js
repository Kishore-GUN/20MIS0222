import { render, screen } from '@testing-library/react';
import Question1 from './Question1';

test('renders learn react link', () => {
  render(<Question1 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
