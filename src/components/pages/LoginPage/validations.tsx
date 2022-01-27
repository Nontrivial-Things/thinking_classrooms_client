import { FormInputsType } from "./interface";

const formInputsValidation = (
  values: {
    email?: string;
    password?: string;
  },
  wrongEmailLabel: string,
  wrongPasswordLabel: string
): FormInputsType => {
  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const { email, password } = values;

  const errors = {} as FormInputsType;

  if (!email || (email && !validateEmail(email))) {
    errors.email = wrongEmailLabel;
  }
  if (!password) {
    errors.password = wrongPasswordLabel;
  }

  return errors;
};

export default formInputsValidation;
