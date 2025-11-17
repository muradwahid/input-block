import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';

import { AboutProModal } from '../../../../../bpl-tools/ProControls';
import { tabController } from '../../../../../bpl-tools/utils/functions';

import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import { BBlocksAds } from '../../../../../bpl-tools/Components';
import Style from './Style/Style';

const Settings = (props) => {
	const { isPremium } = props;

	const [isProModalOpen, setIsProModalOpen] = useState(false);

	const premiumProps = { isPremium, setIsProModalOpen }

	return <>
		<InspectorControls>
			<div className='bPlInspectorInfo'>
				<BBlocksAds />
			</div>

			<TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>{tab => <>
				{'general' === tab.name && <>
					<General {...props} premiumProps={premiumProps} />
				</>}

				{'style' === tab.name && <>
					<Style {...props}/>
				</>}
			</>}</TabPanel>
		</InspectorControls>

		<AboutProModal isProModalOpen={isProModalOpen} setIsProModalOpen={setIsProModalOpen} link='https://bplugins.com/products/advanced-post-block/#pricing'>
			<li>&emsp;<strong>{__('Feature: ', 'b-blocks')}</strong>{__('Feature details.', 'b-blocks')}</li>
		</AboutProModal>
	</>;
};
export default Settings;