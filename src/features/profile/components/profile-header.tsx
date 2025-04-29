import { useEffect, useState } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { MoonIcon, SunIcon } from '../../../assets';
export const ProfileHeader = () => {
	const [fill, setFill] = useState('black');
	useEffect(() => {
		localStorage.getItem('theme') === 'false' || !localStorage.getItem('theme')
			? setFill('black')
			: setFill('white');
	}, []);

	return (
		<div className="flex gap-[71px] items-center justify-center w-full text-[36px] text-black dark:text-white">
			<IoPersonCircleOutline className="size-[70px]" />
			<p>Поздравляю! Вы вошли в личный кабинет </p>
			{localStorage.getItem('theme') === 'false' || !localStorage.getItem('theme') ? (
				<div
					className="cursor-pointer"
					onClick={() => {
						const isDark = document.documentElement.classList.toggle('dark');
						localStorage.setItem('theme', `${isDark}`);
						setFill('white');
					}}
				>
					<MoonIcon fill={fill} />
				</div>
			) : (
				<div
					className="cursor-pointer"
					onClick={() => {
						const isDark = document.documentElement.classList.toggle('dark');
						localStorage.setItem('theme', `${isDark}`);
						setFill('black');
					}}
				>
					<SunIcon fill={fill} />
				</div>
			)}
		</div>
	);
};
