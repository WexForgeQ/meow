export const ContactsBanner = () => {
	return (
		<div className="flex items-center justify-between flex-col w-full h-[600px] bg-primary dark:bg-primaryDark rounded-[20px] p-[50px] relative">
			<p className="text-[36px] w-[736px] text-white text-center">
				Ждем вас в нашем салоне груминга, где <span className="text-black">ваш</span>{' '}
				питомец заботливо преобразуется под надежным вниманием наших опытных специалистов.
			</p>
			<img className="absolute  bottom-[-20px]" src="/images/contacts-cat.png" alt="dog" />
		</div>
	);
};
