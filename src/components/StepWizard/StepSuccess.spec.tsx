import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { StepSuccess } from './StepSuccess';

describe('<StepSuccess />', () => {
  it('should render component', () => {
    renderWithTheme(<StepSuccess isSessionFinale={jest.fn()} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(
      screen.getByText('Cadastro concluído com sucesso')
    ).toBeInTheDocument();
  });

  it('should call isSessionFinale()', () => {
    const isSessionFinaleMocked = jest.fn();
    renderWithTheme(<StepSuccess isSessionFinale={isSessionFinaleMocked} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(isSessionFinaleMocked).toHaveBeenCalledTimes(1);
  });
});
