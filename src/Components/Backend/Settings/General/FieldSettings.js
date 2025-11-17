import { Flex, PanelBody, SelectControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { inputType } from '../../../../utils/options';
import { IconLibrary, Label } from '../../../../../../bpl-tools/Components';

const FieldSettings = (props) => {
  const { attributes, updateObj } = props;
  const { inputField, label } = attributes;
  const { type, placeholder, value, icon, name } = inputField;
  return <PanelBody title={__('Field', 'b-blocks')} className='bPlPanelBody' initialOpen={true}>
    <TextControl label={__('Label', 'b-blocks')} value={label.text} onChange={val => { updateObj('label', val, 'text' ) }} />
    <Flex>
      <Label className='flex1'>{__('Type', 'b-blocks')}</Label>
      <SelectControl className='flex1' labelPosition='edge' value={type} options={inputType} onChange={val => { updateObj('inputField', val, 'type') }} />
    </Flex>
    <TextControl label={__('Placeholder', 'b-blocks')} value={placeholder} onChange={val => { updateObj('inputField', val, 'placeholder') }} />
    <TextControl label={__('Default Value', 'b-blocks')} value={value} onChange={val => { updateObj('inputField', val, 'value') }} />
    <IconLibrary label={__('Icon', 'b-blocks')} value={icon} onChange={val => { updateObj('inputField', val, 'icon') }} />
    <TextControl label={__('Input Custom name attribute', 'b-blocks')} value={name} onChange={val => { updateObj('inputField', val, 'name') }} help={__('This is for the name attributes which is used to submit form data, Name must be unique.', 'b-blocks')} />
    
    </PanelBody>
};

export default FieldSettings;