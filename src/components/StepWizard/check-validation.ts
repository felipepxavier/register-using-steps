import { Field, saveValuesProps } from '.';

export type validateResult = {
  [key: string]: boolean | string;
};

const checkValidation = (
  saveValues: saveValuesProps,
  fields: Field[]
): validateResult => {
  return fields.reduce((acc, field: Field) => {
    const result = {
      isError: false,
      message: '',
    };

    if (field.required) {
      const value = saveValues[field.name];
      result.isError = value ? value.length === 0 : true;
      result.message = result.isError
        ? field?.requiredMessage || 'Campo obrigatório'
        : '';
    }

    if (!result.isError && field.customRegexValidation) {
      const validate = RegExp(`${field.customRegexValidation}`);
      const value = saveValues[field.name];

      result.isError = !validate.test(value);
      result.message = field?.customRegexValidationMessage || 'Valor inválido';
    }

    return {
      ...acc,
      [field.name]: result.isError,
      [`${field.name}-message`]: result.message,
    };
  }, {});
};

export { checkValidation };
