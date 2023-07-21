import {
	buildInterface,
	Form,
	GroupContainer,
	Input,
	State,
	Submit,
	Text,
	TextInputCfg,
	VisualGroup,
	VStack,
} from '@frugal-ui/base';

export function main() {
	const username = new State('');
	const password = new State('');

	buildInterface(
		VStack(
			Form(
				{
					action: '/login',
					method: 'POST',
				},
				GroupContainer(
					'Log in',
					VisualGroup(
						Input(
							new TextInputCfg(username, 'Username'),
						).setAccessibilityLabel('username'),
						Input(new TextInputCfg(password, 'Password'))
							.setAccessibilityLabel('password')
							.setAttr('type', 'password'),
						Submit('Log in'),
					),
				),
			)
				.cssWidth('100%')
				.cssMaxWidth('16em'),
		)
			.useDefaultPadding()
			.useDefaultSpacing()

			.cssAlignItems('center'),
	);
}
