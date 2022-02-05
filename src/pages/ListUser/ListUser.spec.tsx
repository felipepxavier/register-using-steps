import { fireEvent, screen } from '@testing-library/react';
import { renderWithThemeEndRouter } from 'utils/tests/helpers';
import { useNavigate } from 'react-router-dom';

import store from 'store';

import ListUser from '.';

jest.mock('store', () => ({
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('<ListUser/>', () => {
  it('should render list correctly', () => {
    (store.getState as jest.Mock).mockReturnValue({
      users: [
        {
          id: '666',
          name: 'mocked',
          lastName: 'mocked',
          email: 'mocked@gmail.com',
          phone: '5198556666',
          zipCode: '94080100',
          address1: 'loren ipsun 01',
          address2: 'loren ipsun 02',
          birthData: '10/08/1994',
          cpf: '666666666-18',
          rent: '25000',
        },
      ],
    });
    renderWithThemeEndRouter(<ListUser />);

    expect(
      screen.getByRole('heading', { name: /listar clientes/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Lista de cadastros/i })
    ).toBeInTheDocument();

    expect(screen.getByText('Nome')).toBeInTheDocument();
    expect(screen.getByText('Sobrenome')).toBeInTheDocument();
    expect(screen.getByText('E-mail')).toBeInTheDocument();
  });

  it('should navigate if click in Visualizar button', () => {
    (store.getState as jest.Mock).mockReturnValue({
      users: [
        {
          id: '666',
          name: 'mocked',
          lastName: 'mocked',
          email: 'mocked@gmail.com',
          phone: '5198556666',
          zipCode: '94080100',
          address1: 'loren ipsun 01',
          address2: 'loren ipsun 02',
          birthData: '10/08/1994',
          cpf: '666666666-18',
          rent: '25000',
        },
      ],
    });

    const navigateMocked = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMocked);
    renderWithThemeEndRouter(<ListUser />);

    const buttonView = screen.getByRole('button', { name: /visualizar/i });
    fireEvent.click(buttonView);

    expect(navigateMocked).toHaveBeenCalledTimes(1);
  });
});
