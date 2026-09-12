import { useState } from 'react';

type ValidationErrors = Record<string, string>;

export default function useFormValidation(initialIsValid = false) {
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isValid, setIsValid] = useState(initialIsValid);

  function validateInput(input: HTMLInputElement): void {
    setErrors((currentErrors) => ({
      ...currentErrors,
      [input.name]: input.validationMessage,
    }));
    setIsValid(input.form?.checkValidity() ?? false);
  }

  function validateForm(form: HTMLFormElement): boolean {
    const inputs = Array.from(form.elements).filter(
      (element): element is HTMLInputElement =>
        element instanceof HTMLInputElement,
    );
    const nextErrors = inputs.reduce<ValidationErrors>((result, input) => {
      result[input.name] = input.validationMessage;
      return result;
    }, {});
    const formIsValid = form.checkValidity();

    setErrors(nextErrors);
    setIsValid(formIsValid);
    return formIsValid;
  }

  return { errors, isValid, validateInput, validateForm };
}
