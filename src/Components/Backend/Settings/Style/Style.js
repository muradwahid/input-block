import ErrorStyles from "./ErrorStyles";
import FieldStyles from "./FieldStyles";
import IconStyles from "./IconStyles";
import LabelStyles from "./LabelStyles";
import PasswordStyles from "./PasswordStyles";

const Style = (props) => {
    const { attributes } = props;
    const { inputField } = attributes;
    return <>
        <FieldStyles {...props} />
        <LabelStyles {...props} />
        <IconStyles {...props} />
        {inputField.type === 'password' &&<PasswordStyles {...props} />}
        <ErrorStyles {...props} />
    </>
}
export default Style;