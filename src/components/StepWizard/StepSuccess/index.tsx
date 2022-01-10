import { Button } from '../shared/styles';
import { IlustrationSuccess } from './IlustrationSuccess';
import * as S from './styles';

type StepSuccessProps = {
  isSessionFinale: (state: boolean) => void;
};

function StepSuccess({ isSessionFinale }: StepSuccessProps) {
  return (
    <S.Container>
      <IlustrationSuccess width="100%" />
      <S.MessageSuccess>Cadastro concluído com sucesso</S.MessageSuccess>
      <Button onClick={() => isSessionFinale(false)} fullWidth>
        Novo cadastro
      </Button>
    </S.Container>
  );
}

export { StepSuccess };
