import { AboutUsHeader } from '../components';
import { AboutUsSlider } from '../components/about-us-slider';

export const AboutUsScreen = () => {
	return (
		<div className="flex flex-col gap-[30px] w-full">
			<AboutUsHeader />
			<p className="font-alegreya text-[30px] text-black dark:text-white text-center">
				Каждый грумер обладает уникальным опытом и навыками, что позволяет нам предлагать
				индивидуальный подход к каждому питомцу. Мы гарантируем заботливое отношение,
				высококачественные услуги и стильные образы для ваших любимцев. Доверьтесь нашим
				специалистам — и вы увидите, как ваш питомец станет красивее и счастливее!
			</p>
			<div className="flex w-full items-center">
				<AboutUsSlider />
			</div>
		</div>
	);
};
