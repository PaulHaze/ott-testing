import { render, screen } from '@testing-library/react';

import { Header } from '../Header';

test('renders a custom title', () => {
  render(<Header text="Test Text" />);
  expect(
    screen.getByRole('heading', { name: /Test Text/i }),
  ).toBeInTheDocument();
});
