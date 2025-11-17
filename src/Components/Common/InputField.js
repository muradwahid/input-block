import { useState } from "react";
import { useFieldValidate } from "../hooks/useFieldValidate";
import { ImEye, ImEyeBlocked } from "../../utils/icons";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import PasswordStrengthMeterText from "./PasswordStrengthMeterText";

const InputField = ({ attributes }) => {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [inputValues, setInputValues] = useState('');

  const { inputField, label, styles, options, validation, password } = attributes;
  const { type, placeholder, value, icon, name } = inputField;
  const { text } = label;
  const { label: labelStyles } = styles;
  const { position } = labelStyles;
  const { isLabel, isRequired, isIcon } = options;
  const { errorMessage } = validation;
  const { options: passOptions, strengthText } = password

  const {isValid, message} = useFieldValidate(inputValues,type, errorMessage, isRequired, password, validation);

  const passVisible = (type) => {
    if (type === 'password') { 
      return isPassVisible ? 'text' : 'password';
    }
    return type;
   }
  //'b-blocks-input-field-error-container'
  return <div data-iserror={isValid} className={`b-blocks-input-field-container label-position-${position} b-blocks-input-field-validation-${name}`}>
    {(text && isLabel) && <label htmlFor={name} className='b-blocks-input-field-label'>{text} { isRequired && <span className='b-blocks-input-field-required'>*</span> } </label>}
    <div className='b-blocks-input-field'>
        {(icon && isIcon) && <span className='b-blocks-input-field-icon' dangerouslySetInnerHTML={{ __html: icon }}/>}
      <input onChange={(e) => setInputValues(e.target.value)} type={passVisible(type)} name={name} id={name} placeholder={placeholder} {...(value && { value })} {...(type === 'email' ? { noValidate: true } : {})} {...(type === 'password' ? { autoComplete:"current-password" }:{ })} />

      {(type === 'password' && passOptions.isVisibilityIcon) && (isPassVisible ? <ImEye onClick={() => setIsPassVisible(!isPassVisible)} className='b-blocks-input-field-passVisibilityIcon' /> : <ImEyeBlocked onClick={() => setIsPassVisible(!isPassVisible)} className='b-blocks-input-field-passVisibilityIcon' />)}
    </div>
      <span className={`b-blocks-input-field-error-message b-blocks-input-field-error-${name}`}>{message}</span>
    {type === 'password' && (passOptions.isStrengthMeter || passOptions.isStrengthText) && <div className='b-blocks-input-field-passStrength-container'>
        {passOptions.isStrengthMeter && <PasswordStrengthMeter value={inputValues} />}
        {passOptions.isStrengthText && <PasswordStrengthMeterText value={inputValues} validationText={passOptions.passStrengthText} strengthText={strengthText} />}
      </div>}

    </div>
};

export default InputField;