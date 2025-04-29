import { HomeBanner, HomeHeader } from '../components';

export const HomeScreen = () => {
	return (
		<div className="flex flex-col gap-[140px]">
			<HomeHeader />
			<HomeBanner />
		</div>
	);
};
