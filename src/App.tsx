import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AppRouter } from './router/app-router';

export const App = () => {
	useEffect(() => {
		console.log(localStorage.getItem('theme'));
		if (localStorage.getItem('theme') === 'true')
			document.documentElement.classList.add('dark');
	}, []);

	return (
		<BrowserRouter>
			<AppRouter />
			<Toaster
				richColors
				closeButton
				toastOptions={{
					duration: 5000,
				}}
			/>
		</BrowserRouter>
	);
};
