import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { APP_ROUTES, Button } from '../../../core';

export const LoginForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const handleSubmit = () => {
		if (!name || !email || !password) {
			toast.error('Пожалуйста, заполните все поля!');
			return;
		}

		const newProfile = {
			name,
			email,
		};

		localStorage.setItem('profile', JSON.stringify(newProfile));
		localStorage.setItem('isAuth', 'true');
		toast.success('Успешный вход');
		navigate(APP_ROUTES.home.route);
	};

	return (
		<div className="flex flex-col justify-center items-center gap-[81px] ">
			<div className="flex relative flex-col w-[1240px] h-fit gap-[45px] rounded-[20px] items-center bg-primary dark:bg-primaryDark pt-[54px] pb-[30px]">
				<img
					src="/images/login-dog.png"
					alt="cat"
					className="absolute top-[-80px] left-10"
				/>

				<div className="flex flex-col gap-[10px] items-center justify-center">
					<p className="text-[20px]">Введите Ваше имя</p>
					<input
						autoComplete="off"
						onChange={(e) => setName(e.target.value)}
						className="w-[588px] text-[40px] h-[90px] bg-white rounded-[15px] shadow-md px-[20px]"
					></input>
				</div>
				<div className="flex flex-col gap-[10px] items-center justify-center">
					<p className="text-[20px]">Введите почту</p>
					<input
						autoComplete="off"
						onChange={(e) => setEmail(e.target.value)}
						className="w-[588px] text-[40px] h-[90px] bg-white rounded-[15px] shadow-md px-[20px]"
					></input>
				</div>

				<div className="flex flex-col gap-[10px] items-center justify-center">
					<p className="text-[20px]">Введите пароль</p>
					<input
						autoComplete="off"
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						className="w-[588px] text-[40px] h-[90px] bg-white rounded-[15px] shadow-md px-[20px]"
					></input>
				</div>
			</div>
			<Button
				onClick={() => handleSubmit()}
				className="h-[60px] w-[383px] rounded-[15px] text-[24px]"
			>
				Войти
			</Button>
		</div>
	);
};
