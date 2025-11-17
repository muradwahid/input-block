import { BorderBoxControl, Flex, PanelBody, __experimentalToggleGroupControl as ToggleGroupControl, __experimentalToggleGroupControlOption as ToggleGroupControlOption } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Background, BoxControl, ColorControl, Device, Typography } from '../../../../../../bpl-tools/Components';
import { useState } from 'react';

const ErrorStyles = ({ attributes, updateObj, device }) => {
  const { styles } = attributes;
  const { error } = styles;

  const [group, setGroup] = useState('text');

  return <PanelBody title={__('Error Styles', 'b-blocks')} className='bPlPanelBody' initialOpen={false}>
    
        <ToggleGroupControl __next40pxDefaultSize __nextHasNoMarginBottom isBlock value={group} onChange={(val) => { setGroup(val) }} className='mt10 mb10' >
          <ToggleGroupControlOption label='Error Text' value='text' />
          <ToggleGroupControlOption label='Error Input' value='input' />
        </ToggleGroupControl>
    
    {
      group === 'text' && <>
        <ColorControl label={__('Color', 'b-blocks')} value={error.text.color} onChange={val => updateObj('styles', val, 'error', 'text', 'color')} defaultColor='#f5222d' />
        <Background label={__('Background', 'b-blocks')} value={error.text.bg} onChange={val => updateObj('styles', val, 'error', 'text','bg')} isImage={false} />
        <Typography label={__('Typography', 'b-blocks')} value={error.text.typo} onChange={val => updateObj('styles', val, 'error', 'text','typo')} />
      </>
    }

    <BoxControl className='mt10' label={<Flex>{__('Margin', 'b-blocks')} <Device /></Flex>} values={error[group][device].margin} onChange={val => updateObj('styles', val, 'error', group, device, 'margin')} />
    <BoxControl className='mt10' label={<Flex>{__('Padding', 'b-blocks')} <Device /></Flex>} values={error[group][device].padding} onChange={val => updateObj('styles', val, 'error', group, device, 'padding')} />
    <BorderBoxControl className='mt10' label={<Flex>{__('Border', 'b-blocks')} <Device /></Flex>} value={error[group][device].border} onChange={val => updateObj('styles', val, 'error', group, device, 'border')} defaultValue={{}} />
    <BoxControl className='mt10' label={<Flex>{__('Border Radius', 'b-blocks')} <Device /></Flex>} values={error[group][device].radius} onChange={val => updateObj('styles', val, 'error', group, device, 'radius')} />

    </PanelBody>
};

export default ErrorStyles;