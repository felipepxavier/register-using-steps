import { useState } from 'react';
import { Steps } from './Steps';

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
};

export type StepsProps = {
  totalSteps: Step[];
  handleSession: (state: boolean) => void;
};

function StepWizard({ totalSteps }: StepWizardProps) {
  const [session, setSession] = useState({ finally: false });

  const handleSession = (state: boolean) => {
    setSession({ finally: state });
  };

  return !session.finally ? (
    <Steps totalSteps={totalSteps} handleSession={handleSession} />
  ) : (
    <h1>obrigado</h1>
  );
}

export { StepWizard };
