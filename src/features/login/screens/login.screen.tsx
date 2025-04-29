import { LoginForm, LoginHeader } from '../components';

export const LoginScreen = () => {
	return (
		<div className="flex flex-col gap-[72px] mb-[81px]">
			<LoginHeader />
			<LoginForm />
		</div>
	);
};
