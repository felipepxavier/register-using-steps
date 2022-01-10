import { useState } from 'react';
import { SaveValuesProps, Steps } from './Steps';
import { StepSuccess } from './StepSuccess';

export type Field = {
  name: string;
  label: string;
  required: boolean;
  requiredMessage?: string;
  customRegexValidation?: string;
  customRegexValidationMessage?: string;
};

export type Step = {
  active: boolean;
  fields: Field[];
};

export type StepWizardProps = {
  totalSteps: Step[];
  callbackData: (arg: SaveValuesProps) => void;
};

function StepWizard({ totalSteps, callbackData }: StepWizardProps) {
  const [session, setSession] = useState({ finally: false });

  const isSessionFinale = (state: boolean) => {
    setSession({ finally: state });
  };

  return !session.finally ? (
    <Steps
      totalSteps={totalSteps}
      isSessionFinale={isSessionFinale}
      callbackData={callbackData}
    />
  ) : (
    <StepSuccess isSessionFinale={isSessionFinale} />
  );
}

export { StepWizard };
