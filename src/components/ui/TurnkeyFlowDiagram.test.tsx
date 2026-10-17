import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TurnkeyFlowDiagram from './TurnkeyFlowDiagram';

describe('TurnkeyFlowDiagram Component', () => {
  it('renders all 5 sequential turnkey phases', () => {
    render(<TurnkeyFlowDiagram />);

    expect(screen.getByText(/الدراسة الهندسية والتراخيص/i)).toBeInTheDocument();
    expect(screen.getByText(/التأسيس والإنشاء العظم/i)).toBeInTheDocument();
    expect(screen.getByText(/الكهروميكانيك والتكييف/i)).toBeInTheDocument();
    expect(screen.getByText(/الحرفية الخشبية والتشطيب/i)).toBeInTheDocument();
    expect(screen.getByText(/التشغيل والتسليم على المفتاح/i)).toBeInTheDocument();
  });

  it('renders numbered architectural step indicators', () => {
    render(<TurnkeyFlowDiagram />);
    const stepIndicators = screen.getAllByTestId('flow-step-number');
    expect(stepIndicators.length).toBe(5);
  });
});
