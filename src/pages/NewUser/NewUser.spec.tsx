import { screen } from '@testing-library/react';
import { renderWithThemeEndRouter } from 'utils/tests/helpers';
import NewUser from '.';

describe('<NewUser />', () => {
  it('should render page correctly', () => {
    renderWithThemeEndRouter(<NewUser />);

    expect(screen.getByRole('heading', { name: /novo cliente/i }));
  });
});
