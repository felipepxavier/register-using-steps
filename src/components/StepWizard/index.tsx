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
  required: boolean,
  customRegexValidation?: string
}

type Step = {
  active: boolean,
  fields: Field[],
}

type StepWizardProps = {
  totalSteps: Step[]
}

type saveValuesProps = {
  [key: string]: string
}

type errorProps = {
  [key: string]: boolean
}

const StepWizard = ({ totalSteps = stepsField }: StepWizardProps) => {
  const [steps, setSteps] = useState<Step[]>(totalSteps);
  const [saveValues, setSaveValues] = useState({} as saveValuesProps);
  const [errors, setErrors] = useState({} as errorProps);

  const isActivatedIndex = useMemo(() => {
    return steps.findIndex(step => step.active)
  },[steps])

  const handleUpdateActivedStep = (activedStepIndex: number) => (step: Step, index: number) => 
  (index === activedStepIndex ? {...step, active: true} : {...step, active: false})


  const handleNextStep = (nextStep: number) => {
    handleValidateValues()
    .then((validate: any) => {
      const isError = Object.values(validate).some(isError => isError);
    
      if(isError) {
        console.log(validate)
        setErrors(validate);
      }
      return isError;
    })
    .then((isError) => {
      if(isError) { return }
      setSteps(oldState => oldState.map(handleUpdateActivedStep(nextStep)))
    });
  }

  const handlePreviousStep = (previousStep: number) => {
    setSteps(oldState => oldState.map(handleUpdateActivedStep(previousStep)))
  }

  const handleValidateValues = () => new Promise((resolve, reject) => {
    try {
        const validate = steps[isActivatedIndex].fields.reduce((acc, field) => {
          let isError = false;
          if(field.required) {
            const value = saveValues[field.name];
            isError = value ? value.length === 0 : true;
          };
    
          if(!isError && field.customRegexValidation) {
            const validate = RegExp(`${field.customRegexValidation}`);
            const value = saveValues[field.name];
            isError = validate.test(value)
          }
         
          return {...acc,  [field.name]: isError};
        }, {})
        resolve(validate);
    } catch (error) {
      reject(error);
    }
  });

  const handleChangeValue = (name: string, value: string) => {
    setSaveValues(oldState => ({ ...oldState, [name]: value }))
  }

  return (

    <S.Step>

      <S.Title>Preencha os campos</S.Title>
 
      { steps[isActivatedIndex].fields.map((field) => {
        return (
          <S.Field key={field.name}>
            <S.Label htmlFor={field.name}>{field.label}</S.Label>
            <S.Input 
              id={field.name} 
              name={field.name}
              placeholder={field.label} 
              isError={errors[field.name]} 
              onChange={(event) => handleChangeValue(field.name, event.target.value)}
              value={saveValues[field.name] || ''}
            />
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