import { useMemo, useState } from 'react';
import * as S from './styles';


const stepsField = [
  {
    active: true,
    
    fields: [
      {
        name: 'name',
        label: 'Nome',
        required: true,
      }, 
      {
        name: 'last-name',
        label: 'Sobrenome',
        required: true,
      }, 
      {
        name: 'email',
        label: 'E-mail',
        required: true,
      },
      {
        name: 'phone',
        label: 'Telefone',
        required: false,
      }
    ]
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
    ]
  }
]

type Field = {
  name: string,
  label: string,
  required: boolean
}

type Step = {
  active: boolean,
  fields: Field[],
}

type StepWizardProps = {
  totalSteps: Step[]
}

const StepWizard = ({ totalSteps = stepsField }: StepWizardProps) => {
  const [steps, setSteps] = useState<Step[]>(totalSteps);

const isActivatedIndex = useMemo(() => {
  return steps.findIndex(step => step.active)
},[steps])

const handleUpdateActivedStep = (activedStepIndex: number) => (step: Step, index: number) => 
(index === activedStepIndex ? {...step, active: true} : {...step, active: false})


const handleNextStep = (nextStep: number) => {
    console.log(nextStep)
    setSteps(oldState => oldState.map(handleUpdateActivedStep(nextStep)))
}

const handlePreviousStep = (previousStep: number) => {
  console.log(previousStep)
  setSteps(oldState => oldState.map(handleUpdateActivedStep(previousStep)))
}

  return (

    <S.Step>

      <S.Title>Preencha os campos</S.Title>
 
      { steps[isActivatedIndex].fields.map((field) => {
        return (
          <S.Field key={field.name}>
            <S.Label htmlFor={field.name}>{field.label}</S.Label>
            <S.Input id={field.name} name={field.name} />
          </S.Field>
        )})
      }

      <S.Navigate>
        <S.Button onClick={() => handlePreviousStep(isActivatedIndex - 1) }>Voltar</S.Button>
        <S.Button onClick={() => handleNextStep(isActivatedIndex + 1)}>Continuar</S.Button>
      </S.Navigate>

    </S.Step>
  )
}

export { StepWizard };