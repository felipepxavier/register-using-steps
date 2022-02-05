import { screen, act } from '@testing-library/react';
import { renderWithThemeEndRouter } from 'utils/tests/helpers';
import { useParams as useParamsMocked } from 'react-router-dom';
import store from 'store';
import User from '.';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

jest.mock('store', () => ({
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(),
}));

const userMocked = {
  id: '10',
  name: 'mocked',
  lastName: 'junior',
  email: 'mocked@gmail.com',
  phone: '5198556666',
  zipCode: '94080100',
  address1: 'loren ipsun 01',
  address2: 'loren ipsun 02',
  birthData: '10/08/1994',
  cpf: '666666666-18',
  rent: '25000',
};

describe('<User />', () => {
  it('should render page correctly', async () => {
    (useParamsMocked as jest.Mock).mockReturnValue({ id: '10' });
    (store.getState as jest.Mock).mockReturnValue({
      users: [userMocked],
    });

    await act(async () => {
      renderWithThemeEndRouter(<User />);
    });

    expect(screen.getByText(userMocked.name)).toBeInTheDocument();
    expect(screen.getByText(userMocked.lastName)).toBeInTheDocument();
    expect(screen.getByText(userMocked.email)).toBeInTheDocument();
    expect(screen.getByText(userMocked.phone)).toBeInTheDocument();
    expect(screen.getByText(userMocked.zipCode)).toBeInTheDocument();
  });
});
