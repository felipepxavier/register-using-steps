import {checkValidation  } from './check-validation';

describe('checkValidation()', () => {
    
    it('should validate fields', () => {
        const values = {
            'name': 'test',
            'email': 'test',
        };

        const fields = [
            {
                name: 'name',
                label: 'Nome',
                required: true,
            },
            {
                name: 'email',
                label: 'E-mail',
                required: true,
                customRegexValidation: '[a-z0-9]+@[a-z]+\.[a-z]{2,3}'
            },
        ]

        const validate = checkValidation(values, fields);
        expect(validate).toEqual(
                {
                    name: false,
                    "name-message": "Campo obrigatório", 
                    email: true,
                    'email-message': "Valor inválido",
                }
            )
    })
    
    
})
