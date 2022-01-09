import { screen, fireEvent, act } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { StepWizard } from '.';

describe('<StepWizard />', () => {
  it('should render component', () => {
    const stepsField = [
      {
        active: true,

        fields: [
          {
            name: 'name',
            label: 'Nome',
            required: true,
            requiredMessage: 'Campo obrigatório',
          },
          {
            name: 'last-name',
            label: 'Sobrenome',
            required: true,
            requiredMessage: 'Campo obrigatório',
          },
          {
            name: 'email',
            label: 'E-mail',
            required: true,
            requiredMessage: 'Campo obrigatório',
            customRegexValidation: '[a-z0-9]+@[a-z]+.[a-z]{2,3}',
            customRegexValidationMessage: 'E-mail inválido',
          },
          {
            name: 'phone',
            label: 'Telefone',
            required: false,
          },
        ],
      },
      {
        active: false,
        fields: [
          {
            name: 'zip-code',
            label: 'CEP',
            required: true,
          },
          {
            name: 'address-1',
            label: 'Endereço 1',
            required: true,
          },
          {
            name: 'address-2',
            label: 'Endereço 2',
            required: false,
          },
        ],
      },
    ];

    renderWithTheme(<StepWizard totalSteps={stepsField} />);

    expect(screen.getByText(/preencha os campos/i)).toBeInTheDocument();
  });

  it('should navigate steps if validate values on click in next', async () => {
    const stepsField = [
      {
        active: true,

        fields: [
          {
            name: 'name',
            label: 'Nome',
            required: true,
          },
          {
            name: 'last-name',
            label: 'Sobrenome',
            required: true,
          },
          {
            name: 'email',
            label: 'E-mail',
            required: true,
          },
          {
            name: 'phone',
            label: 'Telefone',
            required: false,
          },
        ],
      },
      {
        active: false,
        fields: [
          {
            name: 'zip-code',
            label: 'CEP',
            required: true,
          },
          {
            name: 'address-1',
            label: 'Endereço 1',
            required: true,
          },
          {
            name: 'address-2',
            label: 'Endereço 2',
            required: false,
          },
        ],
      },
    ];

    renderWithTheme(<StepWizard totalSteps={stepsField} />);

    const nameInput = screen.getByPlaceholderText(/^nome/i);
    const lasNameInput = screen.getByPlaceholderText(/sobrenome/i);
    const emailInput = screen.getByPlaceholderText(/e-mail/i);

    fireEvent.change(nameInput, { target: { value: 'myName' } });
    fireEvent.change(lasNameInput, { target: { value: 'lastName' } });
    fireEvent.change(emailInput, { target: { value: 'email' } });

    await act(async () => {
      const btnNext = screen.getByText('Continuar');
      fireEvent.click(btnNext);
    });
    const inputCep = await screen.findByText('CEP');

    expect(inputCep).toBeInTheDocument();
  });

  it('should not navigate if not validate values on click in next', async () => {
    const stepsField = [
      {
        active: true,

        fields: [
          {
            name: 'name',
            label: 'Nome',
            required: true,
          },
          {
            name: 'last-name',
            label: 'Sobrenome',
            required: true,
          },
          {
            name: 'email',
            label: 'E-mail',
            required: true,
          },
          {
            name: 'phone',
            label: 'Telefone',
            required: false,
          },
        ],
      },
      {
        active: false,
        fields: [
          {
            name: 'zip-code',
            label: 'CEP',
            required: true,
          },
          {
            name: 'address-1',
            label: 'Endereço 1',
            required: true,
          },
          {
            name: 'address-2',
            label: 'Endereço 2',
            required: false,
          },
        ],
      },
    ];
    renderWithTheme(<StepWizard totalSteps={stepsField} />);

    await act(async () => {
      const btnNext = screen.getByText('Continuar');
      fireEvent.click(btnNext);
    });

    expect(screen.queryByLabelText(/cep/i)).not.toBeInTheDocument();
  });

  it('should not give an error when clicking "Voltar" if you dont have a previous step', async () => {
    const stepsField = [
      {
        active: true,

        fields: [
          {
            name: 'name',
            label: 'Nome',
            required: true,
          },
          {
            name: 'last-name',
            label: 'Sobrenome',
            required: true,
          },
          {
            name: 'email',
            label: 'E-mail',
            required: true,
          },
          {
            name: 'phone',
            label: 'Telefone',
            required: false,
          },
        ],
      },
      {
        active: false,
        fields: [
          {
            name: 'zip-code',
            label: 'CEP',
            required: true,
          },
          {
            name: 'address-1',
            label: 'Endereço 1',
            required: true,
          },
          {
            name: 'address-2',
            label: 'Endereço 2',
            required: false,
          },
        ],
      },
    ];
    renderWithTheme(<StepWizard totalSteps={stepsField} />);

    await act(async () => {
      const btnBack = screen.getByText('Voltar');
      fireEvent.click(btnBack);
    });

    expect(screen.queryByLabelText(/cep/i)).not.toBeInTheDocument();
    expect(screen.getByLabelText(/^nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/sobrenome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/telefone/i)).toBeInTheDocument();
  });

  it('should not give an error when clicking "Continuar" if you dont have a next step', async () => {
    const stepsField = [
      {
        active: true,

        fields: [
          {
            name: 'name',
            label: 'Nome',
            required: true,
          },
          {
            name: 'last-name',
            label: 'Sobrenome',
            required: true,
          },
          {
            name: 'email',
            label: 'E-mail',
            required: true,
          },
          {
            name: 'phone',
            label: 'Telefone',
            required: false,
          },
        ],
      },
      {
        active: false,
        fields: [
          {
            name: 'zip-code',
            label: 'CEP',
            required: true,
          },
          {
            name: 'address-1',
            label: 'Endereço 1',
            required: true,
          },
          {
            name: 'address-2',
            label: 'Endereço 2',
            required: false,
          },
        ],
      },
    ];
    renderWithTheme(<StepWizard totalSteps={stepsField} />);

    const nameInput = screen.getByPlaceholderText(/^nome/i);
    const lasNameInput = screen.getByPlaceholderText(/sobrenome/i);
    const emailInput = screen.getByPlaceholderText(/e-mail/i);

    fireEvent.change(nameInput, { target: { value: 'myName' } });
    fireEvent.change(lasNameInput, { target: { value: 'lastName' } });
    fireEvent.change(emailInput, { target: { value: 'email' } });

    const btnNext = screen.getByText('Continuar');

    await act(async () => {
      fireEvent.click(btnNext);
    });

    const cepInput = screen.getByPlaceholderText(/^cep/i);
    const endereco1Input = screen.getByPlaceholderText(/^endereço 1/i);
    const endereco2Input = screen.getByPlaceholderText(/^endereço 2/i);

    fireEvent.change(cepInput, { target: { value: '1111' } });
    fireEvent.change(endereco1Input, { target: { value: 'loren ipsun' } });
    fireEvent.change(endereco2Input, { target: { value: 'loren ipsun 2' } });

    await act(async () => {
      fireEvent.click(btnNext);
    });

    expect(cepInput).toBeInTheDocument();
    expect(endereco1Input).toBeInTheDocument();
    expect(endereco2Input).toBeInTheDocument();
  });
});
