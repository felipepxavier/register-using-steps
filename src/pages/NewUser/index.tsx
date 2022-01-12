import { useDispatch } from 'react-redux';
import { addUser } from 'store/modules/users/actions';
import { StepWizard } from '../../components/StepWizard';
import * as S from './styles';

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
        name: 'lastName',
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
        name: 'zipCode',
        label: 'CEP',
        required: true,
      },
      {
        name: 'address1',
        label: 'Endereço 1',
        required: true,
      },
      {
        name: 'address2',
        label: 'Endereço 2',
        required: false,
      },
    ],
  },
  {
    active: false,
    fields: [
      {
        name: 'birthData',
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
function NewClient() {
  const dispatch = useDispatch();

  const handleAddUser = (data: any) => {
    dispatch(addUser(data));
  };

  return (
    <>
      <S.Title>Novo cliente</S.Title>
      <S.Container>
        <StepWizard totalSteps={stepsField} callbackData={handleAddUser} />
      </S.Container>
    </>
  );
}

export default NewClient;
