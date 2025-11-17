import { useBlockProps } from '@wordpress/block-editor';

import Settings from './Settings/Settings';
import Style from '../Common/Style';
import InputField from '../Common/InputField';
import { updateAttributes } from '../../../../bpl-tools/utils/functions';
import { withSelect } from '@wordpress/data';
import { useEffect } from 'react';

const Edit = props => {
	const { attributes, setAttributes, clientId, device, context } = props;

	const isPremium = false;
	const updateObj = updateAttributes(attributes, setAttributes);
	useEffect(() => {
		setAttributes({clientId})
	}, [clientId])
	return <>
		<Settings {...{ attributes, setAttributes, isPremium, updateObj, device }} />

		<div {...useBlockProps()}>
			<Style attributes={attributes} id={`block-${clientId}`} />
			<InputField attributes={attributes}/>
		</div>
	</>;
}
export default withSelect( ( select ) => {
	const { getDeviceType } = select('core/editor');

	return {
		device: getDeviceType()?.toLowerCase(),
	};
} )( Edit );