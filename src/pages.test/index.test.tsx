import { render, screen } from '@testing-library/react';

import Home from '@/pages/index';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Home Page', () => {
  describe('Render method', () => {
    it('should have an h1 tag', () => {
      render(<Home />);
      const heading = screen.getByRole('heading', {
        name: /OTT Testing/,
      });
      expect(heading).toBeInTheDocument();
    });
  });
});
