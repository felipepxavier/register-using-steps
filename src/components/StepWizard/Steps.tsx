import { useMemo, useState } from 'react';
import { checkValidation, ValidateResult } from './checkValidation';
import { Step } from '.';
import * as S from './styles';
import { Button } from './shared/styles';

export type SaveValuesProps = {
  [key: string]: string;
};

type ErrorProps = {
  [key: string]: boolean | string;
};

export type StepsProps = {
  totalSteps: Step[];
  isSessionFinale: (state: boolean) => void;
  callbackData: (arg: SaveValuesProps) => void;
};

function Steps({ totalSteps, isSessionFinale, callbackData }: StepsProps) {
  const [steps, setSteps] = useState<Step[]>(totalSteps);
  const [saveValues, setSaveValues] = useState({} as SaveValuesProps);
  const [errors, setErrors] = useState({} as ErrorProps);

  const isActivatedIndex = useMemo(
    () => steps.findIndex((step) => step.active),
    [steps]
  );

  const handleUpdateActivedStep =
    (activedStepIndex: number) => (step: Step, index: number) =>
      index === activedStepIndex
        ? { ...step, active: true }
        : { ...step, active: false };

  const handleValidateValues = (): Promise<ValidateResult> =>
    new Promise((resolve, reject) => {
      try {
        const validate = checkValidation(
          saveValues,
          steps[isActivatedIndex].fields
        );
        resolve(validate);
      } catch (error) {
        reject(error);
      }
    });

  type NextStepProps = {
    nextStep: number;
    finallySession: boolean;
  };

  const handleNextStep = ({ nextStep, finallySession }: NextStepProps) => {
    handleValidateValues()
      .then((validate) => {
        const isError = Object.values(validate).some(
          (hasError) => typeof hasError === 'boolean' && hasError
        );
        setErrors(validate);
        return isError;
      })
      .then((isError) => {
        if (isError) {
          return;
        }
        if (finallySession) {
          callbackData(saveValues);
          isSessionFinale(true);
        } else {
          setSteps((oldState) =>
            oldState.map(handleUpdateActivedStep(nextStep))
          );
        }
      });
  };

  const handlePreviousStep = (previousStep: number) => {
    if (previousStep < 0) {
      return;
    }

    setSteps((oldState) => oldState.map(handleUpdateActivedStep(previousStep)));
  };

  const handleChangeValue = (name: string, value: string) => {
    setSaveValues((oldState) => ({ ...oldState, [name]: value }));
  };

  return (
    <S.Step>
      <S.Title>
        Preencha os campos ({`${isActivatedIndex + 1}/${steps.length}`})
      </S.Title>

      <S.ContainerFields>
        {steps[isActivatedIndex].fields.map((field) => (
          <S.Field key={field.name}>
            <S.Label htmlFor={field.name}>{field.label}</S.Label>
            <S.Input
              id={field.name}
              name={field.name}
              placeholder={field.label}
              isError={!!errors[field.name]}
              onChange={(event) =>
                handleChangeValue(field.name, event.target.value)
              }
              value={saveValues[field.name] || ''}
            />
            {errors[`${field.name}-message`] && (
              <S.Message>{errors[`${field.name}-message`]}</S.Message>
            )}
          </S.Field>
        ))}
      </S.ContainerFields>

      <S.Navigate>
        <Button
          onClick={() => handlePreviousStep(isActivatedIndex - 1)}
          isDisabled={isActivatedIndex - 1 < 0}
        >
          Voltar
        </Button>

        <Button
          onClick={() =>
            handleNextStep({
              nextStep: isActivatedIndex + 1,
              finallySession: isActivatedIndex + 1 === steps.length,
            })
          }
        >
          {isActivatedIndex + 1 === steps.length ? 'Finalizar' : 'Continuar'}
        </Button>
      </S.Navigate>
    </S.Step>
  );
}

export { Steps };
