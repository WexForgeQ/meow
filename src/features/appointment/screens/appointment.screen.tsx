import { AppointmentForm, AppointmentHeader } from '../components';

export const AppointmentScreen = () => {
	return (
		<div className="flex flex-col gap-[72px] mb-[81px]">
			<AppointmentHeader />
			<AppointmentForm />
		</div>
	);
};
