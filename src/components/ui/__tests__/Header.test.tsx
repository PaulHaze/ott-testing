import { render, screen } from '@testing-library/react';

import { Header } from '../Header';

test('renders a message', () => {
  render(<Header text="Test Text" />);
  expect(screen.getByText('Test Text')).toBeInTheDocument();
});
