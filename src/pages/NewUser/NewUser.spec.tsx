import { screen, fireEvent, act } from '@testing-library/react';
import { renderWithThemeEndRouter } from 'utils/tests/helpers';
import { addUser as addUserMocked } from 'store/modules/users/actions';
import { useDispatch as useDispatchMocked } from 'react-redux';
import NewUser from '.';

jest.mock('store/modules/users/actions', () => ({
  addUser: jest.fn(),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('<NewUser />', () => {
  it('should render page correctly', () => {
    renderWithThemeEndRouter(<NewUser />);

    expect(screen.getByRole('heading', { name: /novo cliente/i }));
  });

  it('should call callbackData if completes the steppers', async () => {
    const dispatchMocked = jest.fn();
    (useDispatchMocked as jest.Mock).mockReturnValue(dispatchMocked);

    renderWithThemeEndRouter(<NewUser />);
    const btnNext = screen.getByText('Continuar');

    const nameInput = screen.getByPlaceholderText(/^nome/i);
    const lasNameInput = screen.getByPlaceholderText(/sobrenome/i);
    const emailInput = screen.getByPlaceholderText(/e-mail/i);
    const telefoneInput = screen.getByPlaceholderText(/telefone/i);

    fireEvent.change(nameInput, { target: { value: 'myName' } });
    fireEvent.change(lasNameInput, { target: { value: 'lastName' } });
    fireEvent.change(emailInput, { target: { value: 'email@gmail.com' } });
    fireEvent.change(telefoneInput, { target: { value: '666666666' } });

    await act(async () => {
      fireEvent.click(btnNext);
    });

    const cepInput = screen.getByPlaceholderText(/cep/i);
    const endereco1Input = screen.getByPlaceholderText(/^endereço 1/i);
    const endereco2Input = screen.getByPlaceholderText(/^endereço 2/i);

    fireEvent.change(cepInput, { target: { value: '66660' } });
    fireEvent.change(endereco1Input, { target: { value: 'loren ipsun 1' } });
    fireEvent.change(endereco2Input, { target: { value: 'loren ipsun 2' } });

    await act(async () => {
      fireEvent.click(btnNext);
    });
    const btnSubmit = screen.getByText('Finalizar');

    const birthDataInput = screen.getByPlaceholderText(/data de nascimento/i);
    const cpfInput = screen.getByPlaceholderText(/cpf/i);
    const rentInput = screen.getByPlaceholderText(/renda mensal/i);

    fireEvent.change(birthDataInput, { target: { value: '05/07/1992' } });
    fireEvent.change(cpfInput, { target: { value: '6541648646' } });
    fireEvent.change(rentInput, { target: { value: '250000' } });

    await act(async () => {
      fireEvent.click(btnSubmit);
    });

    expect(dispatchMocked).toHaveBeenCalledTimes(1);
    expect(addUserMocked).toHaveBeenCalledTimes(1);
  });
});
