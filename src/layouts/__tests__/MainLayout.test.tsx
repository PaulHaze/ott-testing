import { render, screen } from '@testing-library/react';
import { MainLayout } from '../MainLayout';

test('has a sidebar button', () => {
  render(<MainLayout>Test</MainLayout>);
  expect(screen.getByTestId('sidebar-btn')).toBeInTheDocument();
});
