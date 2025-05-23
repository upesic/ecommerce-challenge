import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';
import '@testing-library/jest-dom';

describe('Footer component', () => {
  it('renders Footer component', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})