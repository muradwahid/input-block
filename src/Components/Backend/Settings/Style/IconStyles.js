import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { ColorControl } from '../../../../../../bpl-tools/Components';

const IconStyles = ({ attributes, updateObj, device }) => {
  const { styles, inputField, password } = attributes;
  const { icon } = styles;
  return <PanelBody title={__('Icon Styles', 'b-blocks')} className='bPlPanelBody' initialOpen={false}>
    <strong>{__('Field Icon','b-blocks')}</strong>
    <ColorControl label={__('Icon Color', 'b-blocks')} value={icon.field.color} onChange={val => updateObj('styles', val, 'icon', 'field','color')} />
    <RangeControl label={__('Icon Size', 'b-blocks')} value={icon.field[device].size} onChange={val => updateObj('styles', val, 'icon', 'field', device, 'size')} defaultValue='' />
    <RangeControl label={__('Position X', 'b-blocks')} value={icon.field[device].position.x} onChange={val => updateObj('styles', val, 'icon', 'field', device, 'position', 'x')} min={-100} max={100} defaultValue='' />
    
    <RangeControl label={__('Position Y', 'b-blocks')} value={icon.field[device].position.y} onChange={val => updateObj('styles', val, 'icon', 'field', device, 'position', 'y')} min={-100} max={100} defaultValue='' />
    {
      (inputField.type === 'password' && password.options.isVisibilityIcon) && <>
      <strong>{__('Password Visibility Icon', 'b-blocks')}</strong>
      <ColorControl label={__('Icon Color', 'b-blocks')} value={icon.password.color} onChange={val => updateObj('styles', val, 'icon', 'password', 'color')} />
      <RangeControl label={__('Icon Size', 'b-blocks')} value={icon.password[device].size} onChange={val => updateObj('styles', val, 'icon', 'password', device, 'size')} defaultValue='' />
      <RangeControl label={__('Position X', 'b-blocks')} value={icon.password[device].position.x} onChange={val => updateObj('styles', val, 'icon', 'password', device, 'position', 'x')} min={-100} max={100} defaultValue='' />
  
      <RangeControl label={__('Position Y', 'b-blocks')} value={icon.password[device].position.y} onChange={val => updateObj('styles', val, 'icon', 'password', device, 'position', 'y')} min={-100} max={100} defaultValue='' />
      </>
    }
    
  </PanelBody>
};

export default IconStyles;