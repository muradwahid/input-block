import { Flex, PanelBody, __experimentalToggleGroupControl as ToggleGroupControl, __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { BottomIcon, LeftIcon, RightIcon, TopIcon } from '../../../../utils/icons';
import { BoxControl, ColorControl, Label, Typography } from '../../../../../../bpl-tools/Components';

const LabelStyles = ({ attributes, updateObj, device }) => {
  const { styles } = attributes;
  const { label } = styles;
  return <PanelBody title={__('Label Styles', 'b-blocks')} className='bPlPanelBody' initialOpen={false}>
    <Flex align='center'>
      <Label className='flex1'>{__('Label Position', 'b-blocks')}</Label>
    <ToggleGroupControl className='flex1' __next40pxDefaultSize __nextHasNoMarginBottom isBlock value={label.position} onChange={(val) => updateObj('styles',val,'label','position')} >

      <ToggleGroupControlOptionIcon label="Top" value="top" icon={<TopIcon />} />
      <ToggleGroupControlOptionIcon label="Bottom" value="bottom" icon={<BottomIcon />} />
      <ToggleGroupControlOptionIcon label="Left" value="left" icon={<LeftIcon />} />
      <ToggleGroupControlOptionIcon label="Right" value="right" icon={<RightIcon />} />

    </ToggleGroupControl>
    </Flex>

    <ColorControl label={__('Label Color', 'b-blocks')} value={label.colors.text} onChange={val => updateObj('styles', val, 'label', 'colors', 'text')} />
    
    <ColorControl label={__('Required Color', 'b-blocks')} value={label.colors.required} onChange={val => updateObj('styles', val, 'label', 'colors', 'required')} />
    
    <Typography label={__('Typography', 'b-blocks')} value={label.typo} onChange={val => updateObj('styles', val, 'label', 'typo')} />
    
    <BoxControl label={__('Margin', 'b-blocks')} values={label[device].margin} onChange={val=>updateObj('styles',val,'label',device,'margin')} />

  </PanelBody>
};

export default LabelStyles;