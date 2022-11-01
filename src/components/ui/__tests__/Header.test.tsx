import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { Header } from '../Header';

test('renders a custom title', () => {
  render(<Header text="Test Text" />);
  expect(
    screen.getByRole('heading', { name: /Test Text/i }),
  ).toBeInTheDocument();
});
