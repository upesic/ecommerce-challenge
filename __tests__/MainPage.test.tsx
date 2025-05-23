import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

jest.mock('@/components/CategoryList', () => () => (
  <div data-testid="mock-category-list">Mock Category List</div>
));

describe('Home Page', () => {
  it('renders heading and description text', async () => {
    render(<Home />);

    const heading = await screen.findByRole('heading', { name: /welcome to impact web shop/i })

    expect(heading).toBeInTheDocument();

    expect(
      screen.getByText(/explore our selection/i)
    ).toBeInTheDocument();
  });

});