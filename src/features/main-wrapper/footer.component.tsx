import { useLocation, useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { APP_ROUTES } from '../../core';

export const Footer = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const navItems = [
		{ label: 'Главная', route: APP_ROUTES.home.route },
		{ label: 'О нас', route: APP_ROUTES.aboutUs.route },
		{ label: 'Услуги', route: APP_ROUTES.services.route },
		{ label: 'Контакты', route: APP_ROUTES.contacts.route },
	];

	return (
		<div className="dark:bg-primaryDark flex items-center justify-center bg-primary text-white dark:text-black h-[120px] text-[24px] gap-[40px] w-full ">
			{navItems.map(({ label, route }) => (
				<p
					key={route}
					className={twMerge(
						'cursor-pointer hover:text-black hover:dark:text-white',
						pathname === route && 'text-black dark:text-white',
					)}
					onClick={() => navigate(route)}
				>
					{label}
				</p>
			))}
		</div>
	);
};
