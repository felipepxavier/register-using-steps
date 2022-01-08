import { render, screen, fireEvent } from '@testing-library/react'
import { StepWizard } from '.'

describe('<StepWizard />', () => {
    
    it('should render component', () => {
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
        render(<StepWizard totalSteps={stepsField} />)

        expect(screen.getByText(/preencha os campos/i)).toBeInTheDocument()
    })


    it('should navigate steps', () => {
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
        render(<StepWizard totalSteps={stepsField} />);
        const btnNext = screen.getByText(/continuar/i);
        fireEvent.click(btnNext)

        expect(screen.getByLabelText(/cep/i)).toBeInTheDocument()
    })
    
})
