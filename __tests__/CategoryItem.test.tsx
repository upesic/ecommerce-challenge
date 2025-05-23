import { render, screen } from '@testing-library/react';
import CategoryItem from '@/components/CategoryItem';
import '@testing-library/jest-dom';
import { CategoryItemProps } from '@/types';

const defaultProps: CategoryItemProps = {
  name: 'electronics',
  priority: false,
};


jest.mock('next/image', () => (props: any) => {
  return <img {...props} />;
});

describe('CategoryItem', () => {

  beforeEach(() => {
    render(<CategoryItem {...defaultProps} />);
  })

  it('renders category name', async () => {
    expect(await screen.findByText(/electronics/i)).toBeInTheDocument();
  });

  it('renders correct image alt and src', async () => {
    const img = await screen.findByRole('img') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.alt).toBe('electronics');
    expect(img.src).toContain('/images/electronics.jpg');
  });

  it('links to correct category page', async () => {
    const link = await screen.findByRole('link') as HTMLAnchorElement;
    expect(link).toHaveAttribute('href', '/category/electronics');
  });
});