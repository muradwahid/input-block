import { BorderBoxControl, Flex, PanelBody, __experimentalToggleGroupControl as ToggleGroupControl, __experimentalToggleGroupControlOption as ToggleGroupControlOption, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from 'react';
import { Background, BoxControl, ColorControl, Device, Label, Typography } from '../../../../../../bpl-tools/Components';

const PasswordStyles = ({ attributes, updateObj, device }) => {
  const [group, setGroup] = useState('container');

  const { styles } = attributes;
  const { password } = styles;
  const { strength } = password;
  return <PanelBody title={__('Password Styles', 'b-blocks')} className='bPlPanelBody' initialOpen={false}>
    <strong>{__('Colors', 'b-blocks')}</strong>
    <ColorControl label={__('Very Weak Password', 'b-blocks')} value={strength.colors.veryWeak} onChange={val => updateObj('styles', val,'password', 'strength', 'colors', 'veryWeak')} defaultColor='#f5222d' />
    <ColorControl label={__('Weak Password', 'b-blocks')} value={strength.colors.weak} onChange={val => updateObj('styles', val, 'password', 'strength', 'colors', 'weak')} defaultColor='#fa8c16' />
    <ColorControl label={__('Medium Password', 'b-blocks')} value={strength.colors.medium} onChange={val => updateObj('styles', val, 'password', 'strength', 'colors', 'medium')} defaultColor='#fadb14' />
    <ColorControl label={__('Strong Password', 'b-blocks')} value={strength.colors.strong} onChange={val => updateObj('styles', val, 'password', 'strength', 'colors', 'strong')} defaultColor='#7cb305' />
    
    <ToggleGroupControl __next40pxDefaultSize __nextHasNoMarginBottom isBlock value={group} onChange={(val) => { setGroup(val) }} className="mt10 mb10" >
      <ToggleGroupControlOption label="Container" value="container" />
      <ToggleGroupControlOption label="Meter" value="meter" />
      <ToggleGroupControlOption label="Text" value="text" />
    </ToggleGroupControl>
    {group === 'meter' && <Flex className='mb10'>
      <Label className='flex2'><Flex>{__('Meter Gap', 'b-blocks')} <Device /></Flex></Label>
      <UnitControl className='flex1' labelPosition='edge' value={strength.meter.gap} onChange={val => updateObj('styles', val, 'password', 'strength', 'meter', 'gap')} />
    </Flex>}
    
    {
      (group === 'meter' || group === 'container') && <>
      <Flex>
        <Label className='flex1'><Flex>{__('Width', 'b-blocks')} <Device/></Flex></Label>
        <UnitControl className='flex1' labelPosition='edge' value={strength[group][device].width} onChange={val => updateObj('styles', val, 'password', 'strength', group, device, 'width')} />
      </Flex>
      <Flex className='mt10'>
        <Label className='flex1'><Flex>{__('Height', 'b-blocks')} <Device /></Flex></Label>
        <UnitControl className='flex1' labelPosition='edge' value={strength[group][device].height} onChange={val => updateObj('styles', val, 'password', 'strength', group, device, 'height')} />
      </Flex>
      </>
    }

    {group === 'container' && <Background label={__('Background', 'b-blocks')} value={strength.container.bg} onChange={val => updateObj('styles', val, 'password', 'strength', 'container', 'bg')} isImage={false} />}

    <BoxControl className='mt10' label={<Flex>{__('Margin', 'b-blocks')} <Device /></Flex>} values={strength[group][device].margin} onChange={val => updateObj('styles', val, 'password', 'strength', group, device, 'margin')} />
    
    {(group === 'meter' || group === 'container') && <>
      <BoxControl className='mt10' label={<Flex>{__('Padding', 'b-blocks')} <Device /></Flex>} values={strength[group][device].padding} onChange={val => updateObj('styles', val, 'password', 'strength', group, device, 'padding')} />
        <BorderBoxControl label={__('Border','b-blocks')} value={strength[group].border} onChange={val=>updateObj('styles',val,'password','strength',group,'border')} />
      <BoxControl className='mt10' label={__('Border Radius','b-blocks')} values={strength[group].radius} onChange={val=>updateObj('styles',val,'password','strength',group,'radius')} />
    </>}

    {group === 'text' && <Typography className='mt10' label={__('Typography', 'b-blocks')} value={strength.text.typography} onChange={val=>updateObj('styles',val,'password','strength','text','typography')} />}

    </PanelBody>
};

export default PasswordStyles;