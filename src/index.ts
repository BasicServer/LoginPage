import {
	buildInterface,
	Form,
	GroupContainer,
	Input,
	State,
	Submit,
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
						Input(new TextInputCfg(username, 'Username'))
							.setAttr('name', 'username')
							.setAccessibilityLabel('username'),
						Input(new TextInputCfg(password, 'Password'))
							.setAttr('name', 'password')
							.setAccessibilityLabel('password')
							.setAttr('type', 'password'),
						Submit('Log in'),
					),
				),
			)
				.cssWidth('100%')
				.cssMaxWidth('24em'),
		)
			.useDefaultPadding()
			.useDefaultSpacing()

			.cssAlignItems('center'),
	);
}
