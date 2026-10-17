import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BeforeAfterSlider from './BeforeAfterSlider';

describe('BeforeAfterSlider Component', () => {
  const defaultProps = {
    beforeImage: '/images/projects/alrugaib-tabuk/alrugaib-tabuk-steel-mezzanine-structural-framework.jpeg',
    afterImage: '/images/projects/alrugaib-tabuk/alrugaib-tabuk-mezzanine-panoramic-showroom-view.jpeg',
    beforeLabel: 'مرحلة الهيكل والتأسيس',
    afterLabel: 'التشطيب والتسليم الفاخر',
    title: 'صرح مفروشات الرقيب - تبوك',
  };

  it('renders before and after labels correctly', () => {
    render(<BeforeAfterSlider {...defaultProps} />);
    expect(screen.getByText('مرحلة الهيكل والتأسيس')).toBeInTheDocument();
    expect(screen.getByText('التشطيب والتسليم الفاخر')).toBeInTheDocument();
  });

  it('contains an accessible slider range input to control the split', () => {
    render(<BeforeAfterSlider {...defaultProps} />);
    const sliderInput = screen.getByRole('slider');
    expect(sliderInput).toBeInTheDocument();
    expect(sliderInput).toHaveValue('50');

    fireEvent.change(sliderInput, { target: { value: '75' } });
    expect(sliderInput).toHaveValue('75');
  });
});
