import { isExist } from '../../../../bpl-tools/utils/common';
import { getBackgroundCSS, getBorderBoxCSS, getBoxCSS, getMultiShadowCSS, getTypoCSS, isValidCSS } from '../../../../bpl-tools/utils/getCSS'
const Style = ({ attributes, id }) => {
	const { styles } = attributes;
	const { inputField, label, icon, error, password } = styles;
	const { colors, normal, hover, focus } = inputField;
	const { strength } = password;
	const { container, meter, text } = strength;

	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .b-blocks-input-field-container`;
	const labelSl = `${blockSl} .b-blocks-input-field-label`;
	const requiredSl = `${labelSl} .b-blocks-input-field-required`;
	const inputFieldSl = `${blockSl} .b-blocks-input-field`;
	const strengthContainerSl = `${blockSl} .b-blocks-input-field-passStrength-container`;
	const strengthMeterSl = `${strengthContainerSl} .b-blocks-input-field-passStrengthMeter-container`;
	const strengthTextSl = `${strengthContainerSl} .b-blocks-input-field-passStrengthMeterText-container`;
	const passIconSl = `${inputFieldSl} .b-blocks-input-field-passVisibilityIcon`
	const errorContainerSl = `${mainSl} .b-blocks-input-field-error-container .b-blocks-input-field`;
	const errorSl = `${blockSl} .b-blocks-input-field-error-message`;
	const inputSl = `${inputFieldSl} input`;
	const iconSl = `${inputFieldSl} .b-blocks-input-field-icon`;

	const inputStyles = (inputAttr) => {
		const { bg, border, shadow } = inputAttr;
		return `
			${getBackgroundCSS(bg)}
			${getBorderBoxCSS(border)}
			${isValidCSS('box-shadow', getMultiShadowCSS(shadow))}
	`}

	const strengthStyles =(attr,device='desktop')=> `
		${isValidCSS('width', attr[device].width)}
		${isValidCSS('height', attr[device].height)}
		${isValidCSS('margin', getBoxCSS(attr[device].margin))}
		${isValidCSS('padding', getBoxCSS(attr[device].padding))}
		${getBorderBoxCSS(attr.border)}
		${isValidCSS('border-radius', getBoxCSS(attr.radius))}
	`

	return <style dangerouslySetInnerHTML={{
		__html: `
			${getTypoCSS('', inputField.typo).googleFontLink}
			${getTypoCSS('', label.typo).googleFontLink}
			${getTypoCSS('', text.typography).googleFontLink}
			${getTypoCSS('', error.text.typo).googleFontLink}
			
			${getTypoCSS(inputSl,inputField.typo).styles}
			${getTypoCSS(labelSl,label.typo).styles}
			${getTypoCSS(errorSl, error.text.typo).styles}
			${getTypoCSS(strengthTextSl, text.typography).styles}

			${inputSl}{
				${isValidCSS('color', colors.text)}
				${inputStyles(normal)}
				${isValidCSS('padding', getBoxCSS(inputField.desktop.padding))}
				${isValidCSS('border-radius', getBoxCSS(normal.radius.desktop))}
			}
			${inputSl}::placeholder{
				${isValidCSS('color', colors.placeholder)}
			}
			${inputSl}:hover{
				${inputStyles(hover)}
				${isValidCSS('border-radius', getBoxCSS(hover.radius.desktop))}
			}
			${inputSl}:focus{
				${inputStyles(focus)}
				${isValidCSS('border-radius', getBoxCSS(focus.radius.desktop))}
			}
			${labelSl}{
				${isValidCSS('color', label.colors.text)}
				${isValidCSS('margin', getBoxCSS(label.desktop.margin))}
			}
			${requiredSl}{
				${isValidCSS('color', label.colors.required)}
			}
			${iconSl}{
				${isValidCSS('left', isExist(icon.field.desktop.position.x) ? icon.field.desktop.position.x+'px':'')}
				${isValidCSS('top',isExist(icon.field.desktop.position.y)?icon.field.desktop.position.y+'px':'')}
			}
			${iconSl}>svg{
				${isValidCSS('fill', icon.field.color)}
				${isValidCSS('height', isExist(icon.field.desktop.size)?icon.field.desktop.size+'px':'')}
				${isValidCSS('width', isExist(icon.field.desktop.size) ? icon.field.desktop.size + 'px' : '')}
			}
			${passIconSl}{
				${isValidCSS('fill', icon.password.color)}
				${isValidCSS('height', isExist(icon.password.desktop.size) ? icon.password.desktop.size + 'px' : '')}
				${isValidCSS('width', isExist(icon.password.desktop.size) ? icon.password.desktop.size + 'px' : '')}
				${isValidCSS('right', isExist(icon.password.desktop.position.x) ? icon.password.desktop.position.x+'px':'')}
				${isValidCSS('top',isExist(icon.password.desktop.position.y)?icon.password.desktop.position.y+'px':'')}
			}

			${errorContainerSl}>input{
					${isValidCSS('margin', getBoxCSS(error.input.desktop.margin))}
					${isValidCSS('padding', getBoxCSS(error.input.desktop.padding))}
					${getBorderBoxCSS(error.input.desktop.border)}
					${isValidCSS('border-radius', getBoxCSS(error.input.desktop.radius))}
			}
			
			${errorSl}{
					${isValidCSS('color',error.text.color)}
					${isValidCSS('margin', getBoxCSS(error.text.desktop.margin))}
					${isValidCSS('padding', getBoxCSS(error.text.desktop.padding))}
					${getBorderBoxCSS(error.text.desktop.border)}
					${isValidCSS('border-radius', getBoxCSS(error.text.desktop.radius))}
					${getBackgroundCSS(error.text.bg)}
			}

			${strengthContainerSl}{
				${strengthStyles(container,'desktop')}
				${getBackgroundCSS(container.bg)}
			}

			${strengthMeterSl}{
				${isValidCSS('gap', meter.gap)}
			}

			${strengthMeterSl} .b-blocks-input-field-passStrengthMeter{
				${strengthStyles(meter, 'desktop')}
			}
			
			${strengthMeterSl}>.veryWeakPass{
					${isValidCSS('background-color', password.strength.colors.veryWeak)}
			}
			${strengthMeterSl}>.weakPass{
					${isValidCSS('background-color', password.strength.colors.weak)}
			}
			${strengthMeterSl}>.mediumPass{
					${isValidCSS('background-color', password.strength.colors.medium)}
			}
			${strengthMeterSl}>.strongPass{
					${isValidCSS('background-color', password.strength.colors.strong)}
			}

			${strengthTextSl}{
					${isValidCSS('margin', getBoxCSS(text.desktop.margin))}
			}

			${strengthTextSl}>.veryWeakPass{
					${isValidCSS('color', password.strength.colors.veryWeak)}
			}
			${strengthTextSl}>.weakPass{
					${isValidCSS('color', password.strength.colors.weak)}
			}
			${strengthTextSl}>.mediumPass{
					${isValidCSS('color', password.strength.colors.medium)}
			}
			${strengthTextSl}>.strongPass{
					${isValidCSS('color', password.strength.colors.strong)}
			}


	`}} />;
}
export default Style;