import { AddInformation } from 'assets/imgs/AddInformation';
import { Card } from 'components/Card';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { IState } from 'store';
import { IUser } from 'store/modules/users/types';
import * as S from './styles';

function ListUser() {
  const users = useSelector<IState, IUser[]>((state) => state.users);
  const navigate = useNavigate();

  const handleDetail = (data: IUser) => {
    navigate(`/cadastros/${data.id}`);
  };

  return (
    <>
      <S.Title>Listar clientes</S.Title>
      <S.Container>
        {users.length > 0 ? (
          <Card type="large">
            <>
              <S.SubTitle>Lista de cadastros</S.SubTitle>
              <S.Table>
                <S.Header>
                  <S.RowHeader>
                    <S.Cell>Nome</S.Cell>
                    <S.Cell>Sobrenome</S.Cell>
                    <S.Cell>E-mail</S.Cell>
                    <S.Cell />
                  </S.RowHeader>
                </S.Header>
                <tbody>
                  {users.map((user) => (
                    <S.Row key={user.cpf}>
                      <S.Cell data-label="Nome">{user.name}</S.Cell>
                      <S.Cell data-label="Sobrenome">{user.lastName}</S.Cell>
                      <S.Cell data-label="E-mail">{user.email}</S.Cell>
                      <S.Cell>
                        <S.ButtonPreview onClick={() => handleDetail(user)}>
                          Visualizar
                        </S.ButtonPreview>
                      </S.Cell>
                    </S.Row>
                  ))}
                </tbody>
              </S.Table>
            </>
          </Card>
        ) : (
          <Card>
            <>
              <AddInformation width="100%" />
              <S.MessageInfo>
                Sem informações ainda, vamos cadastrar?
              </S.MessageInfo>
              <S.Button to="/">Cadastrar</S.Button>
            </>
          </Card>
        )}
      </S.Container>

      <S.Footer>
        Loren ipsun © 2022 All rights reserved | Privacy Policy
      </S.Footer>
    </>
  );
}

export default ListUser;
