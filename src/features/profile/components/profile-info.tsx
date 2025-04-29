export const ProfileInfo = () => {
	return (
		<div className="flex flex-col  gap-[45px] rounded-[20px] items-center pt-[54px]">
			<div className="flex flex-col gap-[35px] w-[550px] items-center">
				<div className="flex flex-row gap-[50px] items-center  w-full">
					<p className="text-[20px] text-center w-[100px]">Имя</p>
					<div className="min-w-[358px] flex  items-center w-fit text-[40px] h-[90px] bg-white rounded-[15px] shadow-md px-[20px]">
						{JSON.parse(localStorage.getItem('profile')!).name}
					</div>
				</div>
				<div className="flex flex-row gap-[50px] items-center  w-full">
					<p className="text-[20px] text-center w-[100px]">Телефон</p>

					<div className="min-w-[358px] flex  items-center w-fit text-[40px] h-[90px] bg-white rounded-[15px] shadow-md px-[20px]">
						+375(22)585-75-09
					</div>
				</div>
				<div className="flex flex-row gap-[50px] items-center   w-full">
					<p className="text-[20px] text-center w-[100px]">Почта</p>
					<div className="min-w-[358px] flex  items-center w-fit text-[40px] h-[90px] bg-white rounded-[15px] shadow-md px-[20px]">
						{JSON.parse(localStorage.getItem('profile')!).email}
					</div>
				</div>
			</div>
		</div>
	);
};
