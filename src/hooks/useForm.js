import { useState, useEffect, useMemo } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const fromCheckedValues = {};
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];
      fromCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
      setFormValidation(fromCheckedValues);
      console.log(fromCheckedValues);
    }
  };

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }
  }, [formValidation]);

  return {
    ...formState,
    ...formValidation,
    formState,
    onInputChange,
    onResetForm,
    isFormValid,
  };
};
