import { Button, Card } from './shared/styles';
import { IlustrationSuccess } from './IlustrationSuccess';
import { MessageSuccess } from './styles';

type StepSuccessProps = {
  isSessionFinale: (state: boolean) => void;
};

function StepSuccess({ isSessionFinale }: StepSuccessProps) {
  return (
    <Card>
      <IlustrationSuccess width="100%" />
      <MessageSuccess>Cadastro concluído com sucesso</MessageSuccess>
      <Button onClick={() => isSessionFinale(false)} fullWidth>
        Novo cadastro
      </Button>
    </Card>
  );
}

export { StepSuccess };
