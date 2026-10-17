import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import StickyExecutiveCTA from './StickyExecutiveCTA';

describe('StickyExecutiveCTA Component', () => {
  it('renders executive consultation buttons', () => {
    render(<StickyExecutiveCTA />);
    
    // Check consultation CTA link exists
    const consultationLink = screen.getByRole('link', { name: /جلسة استشارية/i });
    expect(consultationLink).toBeInTheDocument();
    expect(consultationLink).toHaveAttribute('href');
    expect(consultationLink.getAttribute('href')).toContain('wa.me');
  });

  it('allows user to dismiss or collapse the floating bar', () => {
    render(<StickyExecutiveCTA />);
    
    const dismissButton = screen.getByLabelText(/إغلاق/i);
    expect(dismissButton).toBeInTheDocument();

    fireEvent.click(dismissButton);

    // After dismiss, the bar should be closed/hidden
    const consultationLink = screen.queryByRole('link', { name: /جلسة استشارية/i });
    expect(consultationLink).not.toBeInTheDocument();
  });
});
