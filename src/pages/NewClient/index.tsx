import { SaveValuesProps } from 'components/StepWizard/Steps';
import { StepWizard } from '../../components/StepWizard';
import * as S from './styles';

function NewClient() {
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
    {
      active: false,
      fields: [
        {
          name: 'birth-data',
          label: 'Data de nascimento',
          required: true,
        },
        {
          name: 'cpf',
          label: 'CPF',
          required: true,
        },
        {
          name: 'rent',
          label: 'Renda Mensal',
          required: true,
        },
      ],
    },
  ];

  const callbackData = (data: SaveValuesProps) => {
    console.log('data=>', data);
  };

  return (
    <S.Container>
      <StepWizard totalSteps={stepsField} callbackData={callbackData} />
    </S.Container>
  );
}

export default NewClient;
