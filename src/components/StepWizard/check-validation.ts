import { Field } from ".";

const checkValidation = (saveValues: any, fields: any) => fields.reduce((acc: any, field: Field) => {
   // let isValid = false;
    let result = {
        isError: false,
        message: ''
    }

    if(field.required) {
      const value = saveValues[field.name];
      result.isError = value ? value.length === 0 : true;
      result.message = field?.requiredMessage || 'Campo obrigatório'
    };
    
    if(!result.isError && field.customRegexValidation) {
      const validate = RegExp(`${field.customRegexValidation}`);
      const value = saveValues[field.name];

      result.isError = !validate.test(value)
      result.message = field?.customRegexValidationMessage || 'Valor inválido'
    }
   
    return {
        ...acc,  
        [field.name]: result.isError,
        [`${field.name}-message`]: result.message
    };
    
  }, {})

export { checkValidation }