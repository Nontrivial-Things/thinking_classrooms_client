import { ErrorsProps } from "./interface";

const formInputsValidation = (values: {
  email?: string;
  password?: string;
}) => {
  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password: string) => {
    // Min. 8 letter password, with at least a symbol, upper and lower case letters and a number
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
  };

  const { email, password } = values;

  const errors = {} as ErrorsProps;

  if (email && !validateEmail(email)) {
    errors.email = " Błędny email";
  }
  if (password && !validatePassword(password)) {
    errors.password = " Błędne hasło";
  }

  return errors;
};

export default formInputsValidation;