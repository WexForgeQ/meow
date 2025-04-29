import { FavoritesGrid, MyAppointments, ProfileHeader, ProfileInfo } from '../components';

export const ProfileScreen = () => {
	return (
		<div className="flex flex-col gap-[30px] w-full mb-[141px]">
			{localStorage.getItem('isAuth') && (
				<>
					<ProfileHeader />
					<ProfileInfo />
					<MyAppointments />
					<FavoritesGrid />
				</>
			)}
			{!localStorage.getItem('isAuth') && (
				<>
					<p className="text-[50px] self-center">Не авторизован</p>
				</>
			)}
		</div>
	);
};
