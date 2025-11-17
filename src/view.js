import { createRoot } from 'react-dom/client';

import './style.scss';
import Style from './Components/Common/Style';
import InputField from './Components/Common/InputField';

document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-input-field');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />

			<InputField attributes={attributes} />
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});