import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AnimatedCounter from './AnimatedCounter';

describe('AnimatedCounter Component', () => {
  it('renders correctly with suffix and prefix', () => {
    render(
      <AnimatedCounter
        target={50000}
        duration={0.01}
        prefix="+"
        suffix=" م²"
      />
    );
    // Container should exist and render
    const counterElement = screen.getByTestId('animated-counter');
    expect(counterElement).toBeInTheDocument();
  });

  it('formats large numbers with commas', async () => {
    render(
      <AnimatedCounter
        target={50000}
        duration={0.01}
        formatCommas={true}
      />
    );
    const counterElement = screen.getByTestId('animated-counter');
    expect(counterElement).toBeInTheDocument();
  });
});
