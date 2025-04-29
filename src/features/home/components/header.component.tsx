import { useEffect, useState } from 'react';
import { IoExit } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { HeaderLogo, PersonIcon } from '../../../assets';
import { APP_ROUTES, Button } from '../../../core';
export const HomeHeader = () => {
	const navItems = [
		{ label: 'Главная', route: APP_ROUTES.home.route },
		{ label: 'О нас', route: APP_ROUTES.aboutUs.route },
		{ label: 'Услуги', route: APP_ROUTES.services.route },
		{ label: 'Контакты', route: APP_ROUTES.contacts.route },
	];

	const [fill, setFill] = useState('black');
	useEffect(() => {
		localStorage.getItem('theme') === 'false' || !localStorage.getItem('theme')
			? setFill('black')
			: setFill('white');
	}, []);
	const navigate = useNavigate();

	return (
		<div className="flex justify-between items-center w-full">
			<div className="flex gap-[10px] items-center">
				<HeaderLogo fill={fill} className="w-[200px] h-[124px]" />
				<div className="flex gap-[40px] text-[24px]">
					{navItems.map(({ label, route }) => (
						<p
							key={route}
							className="cursor-pointer hover:text-black hover:dark:text-white text-black dark:text-white"
							onClick={() => navigate(route)}
						>
							{label}
						</p>
					))}
				</div>
			</div>
			<div className="flex gap-[40px] items-center">
				<Button
					onClick={() =>
						localStorage.getItem('isAuth')
							? navigate(APP_ROUTES.appointment.route)
							: navigate(APP_ROUTES.login.route)
					}
					className="h-[60px] w-[240px] rounded-[15px] text-[24px]"
				>
					Записаться
				</Button>
				<div
					className="cursor-pointer "
					onClick={() =>
						localStorage.getItem('isAuth')
							? navigate(APP_ROUTES.profile.route)
							: navigate(APP_ROUTES.login.route)
					}
				>
					<PersonIcon className=" hover:scale-150" fill={fill} />
				</div>
				<>
					{localStorage.getItem('isAuth') && (
						<IoExit
							onClick={() => {
								localStorage.removeItem('isAuth'),
									localStorage.removeItem('profile');
								localStorage.removeItem('appointments');
								localStorage.removeItem('favoriteMasters');
								navigate('');
							}}
							className="dark:text-white size-[60px] cursor-pointer"
						/>
					)}
				</>
			</div>
		</div>
	);
};
