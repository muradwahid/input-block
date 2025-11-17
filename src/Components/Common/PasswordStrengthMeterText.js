import { getPassLength } from "../../utils/functions";

const PasswordStrengthMeterText = ({ value, validationText, strengthText }) => {
  const length = getPassLength(value);
  const strengthKey = ['veryWeak', 'weak', 'medium', 'strong'];
  const defaultText = { veryWeak: 'Very Weak', weak: 'Weak Password', medium: 'Medium Password', strong: 'Strong Password' };

  const textObj = (strength) => {
    const strengthValue = validationText === 'default' ? defaultText : strengthText;
    return strengthValue[strengthKey[strength]];
  }
  
  return length>0 && <div className="b-blocks-input-field-passStrengthMeterText-container">
    <div className={`b-blocks-input-field-passStrengthMeterText ${strengthKey[length-1]}Pass`}>{textObj(length-1)}</div>
    </div>
};

export default PasswordStrengthMeterText;