export const HomeBanner = () => {
	return (
		<div className="flex items-center justify-between flex-col w-full h-[600px] bg-primary dark:bg-primaryDark mb-[141px] rounded-[20px] p-[50px]">
			<p className="text-[36px] w-[736px] text-white text-center">
				мы подарим <span className="text-black">вашему</span> любимцу не только безупречный
				внешний вид, но и отличное настроение!
			</p>
			<img src="/images/home-page-dog.png" alt="dog" />
		</div>
	);
};
