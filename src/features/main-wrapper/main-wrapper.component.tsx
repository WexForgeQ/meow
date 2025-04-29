import { Outlet } from 'react-router-dom';
import { Footer } from './footer.component';

export const MainWrapper = () => {
	return (
		<div className="flex justify-between flex-col min-h-screen w-full bg-white dark:bg-bgDark">
			<div className="px-[100px] pt-[50px]">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};
