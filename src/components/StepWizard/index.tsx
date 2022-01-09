import { useMemo, useState } from 'react';
import { checkValidation, validateResult } from './check-validation';
import * as S from './styles';

export type Field = {
  name: string;
  label: string;
  required: boolean;
  requiredMessage?: string;
  customRegexValidation?: string;
  customRegexValidationMessage?: string;
};

type Step = {
  active: boolean;
  fields: Field[];
};

type StepWizardProps = {
  totalSteps: Step[];
};

export type saveValuesProps = {
  [key: string]: string;
};

type errorProps = {
  [key: string]: boolean | string;
};

function StepWizard({ totalSteps }: StepWizardProps) {
  const [steps, setSteps] = useState<Step[]>(totalSteps);
  const [saveValues, setSaveValues] = useState({} as saveValuesProps);
  const [errors, setErrors] = useState({} as errorProps);

  const isActivatedIndex = useMemo(
    () => steps.findIndex((step) => step.active),
    [steps]
  );

  const handleUpdateActivedStep =
    (activedStepIndex: number) => (step: Step, index: number) =>
      index === activedStepIndex
        ? { ...step, active: true }
        : { ...step, active: false };

  const handleValidateValues = (): Promise<validateResult> =>
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

  const handleNextStep = (nextStep: number) => {
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
        setSteps((oldState) => oldState.map(handleUpdateActivedStep(nextStep)));
      });
  };

  const handlePreviousStep = (previousStep: number) => {
    setSteps((oldState) => oldState.map(handleUpdateActivedStep(previousStep)));
  };

  const handleChangeValue = (name: string, value: string) => {
    setSaveValues((oldState) => ({ ...oldState, [name]: value }));
  };

  return (
    <S.Step>
      <S.Title>Preencha os campos</S.Title>

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

      <S.Navigate>
        <S.Button onClick={() => handlePreviousStep(isActivatedIndex - 1)}>
          Voltar
        </S.Button>
        <S.Button onClick={() => handleNextStep(isActivatedIndex + 1)}>
          Continuar
        </S.Button>
      </S.Navigate>
    </S.Step>
  );
}

export { StepWizard };
