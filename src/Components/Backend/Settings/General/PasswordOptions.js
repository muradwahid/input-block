import { ToggleControl,TextControl,SelectControl,PanelBody,__experimentalNumberControl as NumberControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const PasswordOptions = ({ attributes, updateObj }) => {
  const { password, validation } = attributes;
  const { options, strengthText } = password;
  return <PanelBody className="bPlPanelBody" title={__('Password Options','b-blocks')} initialOpen={false}>
    <ToggleControl label={__('Show Password Visibility Icon','b-blocks')} value={options.isVisibilityIcon} checked={options.isVisibilityIcon} onChange={val => { updateObj('password', val, 'options', 'isVisibilityIcon') }} />
    <ToggleControl className='mt10' label={__('Show Password Strength Meter', 'b-blocks')} value={options.isStrengthMeter} checked={options.isStrengthMeter} onChange={val => { updateObj('password', val, 'options', 'isStrengthMeter') }} />
    <ToggleControl className='mt10' label={__('Show Password Strength Text', 'b-blocks')} value={options.isStrengthText} checked={options.isStrengthText} onChange={val => { updateObj('password', val, 'options', 'isStrengthText') }} />
    
    <SelectControl className='mt10' label={__('Password Strength Text', 'b-blocks')} labelPosition='edge' options={[{ label: 'Default', value: 'default' }, { label: 'Custom', value: 'custom' }]} value={options.passStrengthText} onChange={val => { updateObj('password', val, 'options', 'passStrengthText') }} />
    {options.passStrengthText ==='custom'&& <>
    
    <TextControl className='mt10' label={__('Very Weak Password', 'b-blocks')} value={strengthText.veryWeak} onChange={val => updateObj('password', val, 'strengthText', 'veryWeak')} />
    
    <TextControl className='mt10' label={__('Weak Password', 'b-blocks')} value={strengthText.weak} onChange={val => updateObj('password', val, 'strengthText', 'weak')} />
    
    <TextControl className='mt10' label={__('Medium Password', 'b-blocks')} value={strengthText.medium} onChange={val => updateObj('password', val, 'strengthText', 'medium')} />
    
    <TextControl className='mt10' label={__('Strong Password', 'b-blocks')} value={strengthText.strong} onChange={val => updateObj('password', val, 'strengthText', 'strong')}  />
    </>}
    
    <ToggleControl label={__('Enable use of week Password', 'b-blocks')} value={options.isWeek} checked={options.isWeek} onChange={val => updateObj('password', val, 'options', 'isWeek') }/>
    {
      !options.isWeek && <>
        <SelectControl label={__('Validation Text', 'b-blocks')} options={[{ label: 'Default', value: 'default' }, { label: 'Custom', value: 'custom' }]} labelPosition='edge' value={options.validationText} onChange={val => updateObj('password', val, 'options', 'validationText')} />

      { 
        options.validationText === 'custom' && <TextControl className='mt10' label={__('Custom Validation Text', 'b-blocks')} value={validation.errorMessage.password.customValidation} onChange={val => updateObj('validation', val, 'errorMessage', 'password','customValidation')} />
      }
  
      <NumberControl label={__('Minimum Password Length', 'b-blocks')} labelPosition='edge' value={options.minLength} onChange={val => updateObj('password', val, 'options', 'minLength')}/>
  
      <ToggleControl className='mt10' label={__('One Uppercase Letter', 'b-blocks')} value={options.isUpperCase} checked={options.isUpperCase} onChange={val => updateObj('password', val, 'options', 'isUpperCase')} />
      
      <ToggleControl className='mt10' label={__('One Lowercase Letter', 'b-blocks')} value={options.isLowerCase} checked={options.isLowerCase} onChange={val => updateObj('password', val, 'options', 'isLowerCase')} />
  
      <ToggleControl className='mt10' label={__('One Number', 'b-blocks')} value={options.isNumber} checked={options.isNumber} onChange={val => updateObj('password', val, 'options', 'isNumber')} />
      
      <ToggleControl className='mt10' label={__('One Special Character', 'b-blocks')} value={options.isSpecialChar} checked={options.isSpecialChar} onChange={val => updateObj('password', val, 'options', 'isSpecialChar')} />
      </>
    }
    
    </PanelBody>
};

export default PasswordOptions;