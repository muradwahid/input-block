import { BorderBoxControl, Flex, PanelBody, __experimentalToggleGroupControl as ToggleGroupControl, __experimentalToggleGroupControlOption as ToggleGroupControlOption } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Background, BoxControl, ColorControl, Device, ShadowControl, Typography } from '../../../../../../bpl-tools/Components';
import { useState } from 'react';

const FieldStyles = ({ attributes, updateObj, device }) => {
  const { styles } = attributes;
  const { inputField } = styles;
  const [group, setGroup] = useState('normal');
  return <PanelBody title={__('Field Styles', 'b-blocks')} className='bPlPanelBody' initialOpen={true}>
    
    <ColorControl label={__('Text Color', 'b-blocks')} value={inputField.colors.text} onChange={val => updateObj('styles', val, 'inputField', 'colors', 'text')} />

    <ColorControl label={__('Placeholder Color', 'b-blocks')} value={inputField.colors.placeholder} onChange={val => updateObj('styles', val, 'inputField', 'colors', 'placeholder')} />

    <BoxControl className='mt10' label={<Flex>{__('Padding', 'b-blocks')} <Device/></Flex>} values={inputField[device].padding} onChange={val => updateObj('styles', val, 'inputField', device, 'padding')} />
    
    <Typography label={__('Typography', 'b-blocks')} value={inputField.typo} onChange={val=>updateObj('styles',val,'inputField','typo')} />
    
    <ToggleGroupControl __next40pxDefaultSize __nextHasNoMarginBottom isBlock value={group} onChange={(val) => { setGroup(val) }} className="mt10" >
      <ToggleGroupControlOption label="Normal" value="normal" />
      <ToggleGroupControlOption label="Hover" value="hover" />
      <ToggleGroupControlOption label="Focus" value="focus" />
    </ToggleGroupControl>

    <Background label={__('Background', 'b-blocks')} value={inputField[group].bg} onChange={val => updateObj('styles', val, 'inputField', group, 'bg')} isImage={false} />

    <BorderBoxControl className='mt10' label={__('Border', 'b-blocks')} value={inputField[group].border} onChange={val => updateObj('styles', val, 'inputField', group, 'border')} />
    
    <BoxControl className='mt10' label={<Flex>{__('Border Radius', 'b-blocks')}<Device/></Flex>} values={inputField[group].radius[device]} onChange={val => updateObj('styles', val, 'inputField',  group,'radius', device)} />

    <ShadowControl label={__('Shadow', 'b-blocks')} value={inputField[group].shadow} onChange={val => updateObj('styles', val, 'inputField', group, 'shadow')} />

    </PanelBody>
};

export default FieldStyles;