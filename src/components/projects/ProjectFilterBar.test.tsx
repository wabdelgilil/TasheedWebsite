import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProjectFilterBar from './ProjectFilterBar';

describe('ProjectFilterBar Component', () => {
  const mockCategories = [
    { id: 'all', label: 'كافة الصروح والمشاريع', emoji: '🏛️' },
    { id: 'restaurants', label: 'مطاعم وكافيهات فاخرة', emoji: '🍽️' },
    { id: 'commercial', label: 'معارض وصروح تجارية', emoji: '🏢' },
  ];

  it('renders all category buttons and highlights selected one', () => {
    const handleSelectCategory = vi.fn();
    render(
      <ProjectFilterBar
        categories={mockCategories}
        selectedCategory="restaurants"
        onSelectCategory={handleSelectCategory}
        searchQuery=""
        onSearchChange={vi.fn()}
        onClearSearch={vi.fn()}
      />
    );

    expect(screen.getByText('مطاعم وكافيهات فاخرة')).toBeInTheDocument();
    expect(screen.getByText('معارض وصروح تجارية')).toBeInTheDocument();

    const commercialBtn = screen.getByText('معارض وصروح تجارية');
    fireEvent.click(commercialBtn);
    expect(handleSelectCategory).toHaveBeenCalledWith('commercial');
  });

  it('handles search input change and clear action', () => {
    const handleSearchChange = vi.fn();
    const handleClearSearch = vi.fn();

    render(
      <ProjectFilterBar
        categories={mockCategories}
        selectedCategory="all"
        onSelectCategory={vi.fn()}
        searchQuery="آشلي"
        onSearchChange={handleSearchChange}
        onClearSearch={handleClearSearch}
      />
    );

    const input = screen.getByPlaceholderText(/ابحث باسم المشروع/i);
    expect(input).toHaveValue('آشلي');

    fireEvent.change(input, { target: { value: 'الرقيب' } });
    expect(handleSearchChange).toHaveBeenCalledWith('الرقيب');

    const clearBtn = screen.getByLabelText('مسح البحث');
    fireEvent.click(clearBtn);
    expect(handleClearSearch).toHaveBeenCalled();
  });
});
