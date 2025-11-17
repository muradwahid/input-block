import { HelpPanel} from '../../../../../../bpl-tools/Components';
import Settings from './Settings';
import FieldSettings from './FieldSettings';
import ValidationMessage from './ValidationMessage';
import PasswordOptions from './PasswordOptions';

const General = (props) => {
	const { attributes } = props;
	const { inputField } = attributes;
	return <>
		<HelpPanel slug='b-blocks' docsLink='https://bplugins.com/docs/content-slider-block/guides/general' />
		<FieldSettings {...props} />
		<Settings {...props} />
		<ValidationMessage {...props} />
		{inputField.type === 'password'&& <PasswordOptions {...props} />}
	</>
}
export default General;