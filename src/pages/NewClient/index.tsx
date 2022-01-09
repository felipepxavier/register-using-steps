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
  ];
  return (
    <S.Container>
      <StepWizard totalSteps={stepsField} />
    </S.Container>
  );
}

export default NewClient;
