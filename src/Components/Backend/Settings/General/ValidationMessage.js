import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const ValidationMessage = ({ attributes, updateObj }) => {
  const { validation, inputField } = attributes;
  const { type } = inputField;
  const { errorMessage } = validation;
  const invalidField = ['email']
  return <PanelBody title={__('Validation Message', 'b-blocks')} className='bPlPanelBody' initialOpen={false}>

    <TextControl label={__('Missing Message', 'b-blocks')} value={errorMessage[type].missing} onChange={val => updateObj('validation', val, 'errorMessage', type, 'missing')} help={__('', 'b-blocks')} />
    
    {
      invalidField.includes(type) && <TextControl label={__('Invalid Message', 'b-blocks')} value={errorMessage[type].invalid} onChange={val => updateObj('validation', val, 'errorMessage', type, 'invalid')} help={__('', 'b-blocks')} />
    }
    
    </PanelBody>
};

export default ValidationMessage;