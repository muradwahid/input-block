import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const Settings = (props) => {
  const { attributes, updateObj } = props;
  const { options } = attributes;
  const { isLabel, isRequired, isIcon } = options;
  return <PanelBody title={__('Settings', 'b-blocks')} className='bPlPanelBody' initialOpen={false}>
            <ToggleControl label={__('Show Label', 'b-blocks')} value={isLabel} checked={isLabel} onChange={val => { updateObj('options', val, 'isLabel') }} />
            <ToggleControl className='mt10' label={__('Field Required', 'b-blocks')} value={isRequired} checked={isRequired} onChange={val => { updateObj('options', val, 'isRequired') }} />
            <ToggleControl className='mt10' label={__('Show Icon', 'b-blocks')} value={isIcon} checked={isIcon} onChange={val => { updateObj('options', val, 'isIcon') }} />
    </PanelBody>
};

export default Settings;