import { render, screen } from '@testing-library/react';

import Home from './Home';

test('renders homepage title test', () => {
  render(<Home />);
  const dashboardElement = screen.getByText(/Sensors with rxjs/i);
  expect(dashboardElement).toBeInTheDocument();
});
