import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'b-blocks') },
	{ name: 'style', title: __('Style', 'b-blocks') }
];

export const inputType = [
	{ label: __('Text', 'b-blocks'), value: 'text' },
	{ label: __('Email', 'b-blocks'), value: 'email' },
	{ label: __('Password', 'b-blocks'), value: 'password' },
	{ label: __('URL', 'b-blocks'), value: 'url' }
]