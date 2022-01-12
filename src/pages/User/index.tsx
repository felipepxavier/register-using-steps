import { AddInformation } from 'assets/imgs/AddInformation';
import { Card } from 'components/Card';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IState } from 'store';
import { IUser } from 'store/modules/users/types';
import * as S from './styles';

type UserProps = {
  isExist: boolean;
  isFind: boolean;
  data: IUser;
};

const labels: any = {
  name: 'Nome',
  lastName: 'Sobrenome',
  email: 'E-mail',
  phone: 'Telefone',
  cpf: 'CPF',
  zipCode: 'CEP',
  address1: 'Endereço 1',
  address2: 'Endereço 2',
  birthData: 'Data de Nascimento',
  rent: 'Renda Mensal',
  id: 'ID',
};

function User() {
  const [userCurrent, setUserCurrent] = useState<UserProps>({
    isExist: false,
    isFind: true,
    data: {} as IUser,
  });
  const { id } = useParams();
  const users = useSelector<IState, IUser[]>((state) => state.users);

  useEffect(() => {
    const user = new Promise<IUser>((resolve, reject) => {
      const findUser = users.find((usr) => usr.id === id);
      if (findUser) {
        resolve(findUser);
      } else {
        reject();
      }
    });

    user
      .then((usrCurrent: IUser) => {
        setUserCurrent({ isExist: true, isFind: false, data: usrCurrent });
      })
      .catch(() => {
        setUserCurrent((oldState) => ({ ...oldState, isFind: false }));
      });
  }, []);
  return (
    <S.Container>
      {userCurrent.isExist && !userCurrent.isFind && (
        <Card>
          <>
            <S.Title>Dados do usuário</S.Title>
            {Object.entries(userCurrent.data).map(([property, value]: any) => (
              <S.Row key={property}>
                <S.Label>{labels[property]}:</S.Label>
                <S.Description>{value}</S.Description>
              </S.Row>
            ))}

            <S.ContainerButton>
              <S.Button to="/cadastros">Retornar a lista</S.Button>
            </S.ContainerButton>
          </>
        </Card>
      )}

      {!userCurrent.isExist && !userCurrent.isFind && (
        <Card>
          <>
            <AddInformation width="100%" />
            <S.Title>
              Ops, este usuário não existe. Deseja cadastrar algum?
            </S.Title>
            <S.Button to="/">Cadastrar</S.Button>
          </>
        </Card>
      )}
    </S.Container>
  );
}

export default User;
