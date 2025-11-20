import { useEffect, useState } from "react";
import passValidation from "./useStrongPassValidation";

export const useFieldValidate = (inputValues,type, errorMessage, isRequired, passwordAttr, validation) => { 
  const { options } = passwordAttr;
  const { errorMessage: validationError} = validation;
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  // const setValue = (value) => { 
  const pass = passValidation(inputValues, options.minLength, options.isUpperCase, options.isLowerCase, options.isNumber, options.isSpecialChar);
  useEffect(() => {
    if (!inputValues && isRequired) {
      setMessage(errorMessage[type].missing);
      setIsValid(true);
    } else if (type === 'email') {
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputValues)) {
        setMessage(errorMessage.email.invalid);
        setIsValid(true);
        if (!inputValues) {
          // setMessage(errorMessage.email.missing);
          setIsValid(false);
        }
      } else {
        setMessage('');
        setIsValid(false);
      }
    } else if (type === 'password') {
      if (!pass && !options.isWeek) {
        if (options.validationText === 'default') {
          setMessage(`${options.minLength} characters, Number, Uppercase, Lowercase, Special character`);
        } else {
          setMessage(validationError.password.customValidation);
        }
        setIsValid(true);
      } else {
        setMessage('');
        setIsValid(false);
      }
    } else {
      setMessage('');
      setIsValid(false);
    }
  }, [pass, isRequired, type, inputValues]);

 
  // }
  return {
    message,
    isValid
  }
}