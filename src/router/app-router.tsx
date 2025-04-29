import { Route, Routes } from 'react-router-dom';
import { APP_ROUTES } from '../core';
import { MainWrapper } from '../features';
import { AboutUsScreen } from '../features/about-us/screens/about-us.screen';
import { AppointmentScreen } from '../features/appointment/screens/appointment.screen';
import { ContactsScreen } from '../features/contacts/screens/contacts.screen';
import { HomeScreen } from '../features/home/screens/home.screen';
import { LoginScreen } from '../features/login/screens/login.screen';
import { ProfileScreen } from '../features/profile/screens/profile.screen';
import { ServicesScreen } from '../features/services/screens/services.screen';
import { SingleServiceScreen } from '../features/services/screens/single-service.screen';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<MainWrapper />}>
				<Route path={APP_ROUTES.home.route} element={<HomeScreen />} />
				<Route path={APP_ROUTES.aboutUs.route} element={<AboutUsScreen />} />
				<Route path={APP_ROUTES.contacts.route} element={<ContactsScreen />} />
				<Route path={APP_ROUTES.services.route} element={<ServicesScreen />} />
				<Route path={APP_ROUTES.services.route} element={<ServicesScreen />} />
				<Route path={APP_ROUTES.singleService.route} element={<SingleServiceScreen />} />
				<Route path={APP_ROUTES.appointment.route} element={<AppointmentScreen />} />
				<Route path={APP_ROUTES.login.route} element={<LoginScreen />} />
				<Route path={APP_ROUTES.profile.route} element={<ProfileScreen />} />
			</Route>
			<Route
				path="*"
				element={
					<div>
						<p className="text-[40px] self-center dark:text-white">404</p>
					</div>
				}
			/>
		</Routes>
	);
};
