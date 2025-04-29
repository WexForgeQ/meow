import { FaPhoneAlt } from 'react-icons/fa';
import { IoIosMap } from 'react-icons/io';
import { MdMailOutline } from 'react-icons/md';
import { ContactsBanner, ContactsHeader } from '../components';
export const ContactsScreen = () => {
	return (
		<div className="flex flex-col w-full gap-[167px]">
			<div className="flex flex-col gap-[30px] w-full">
				<ContactsHeader />
				<ContactsBanner />
			</div>
			<div className="flex  justify-center dark:text-white mb-[120px]">
				<div className="flex flex-col gap-[12px] ml-[120px] mr-[55px] ">
					<div className="flex items-center gap-[5px] text-[20px]">
						<FaPhoneAlt /> Телефоны:
					</div>
					<div className="flex flex-col text-primary text-[24px] dark:text-primaryDark font-alegreya underline">
						<p className="cursor-pointer hover:text-primaryDark/90 dark:hover:text-primary/90">
							+375 (29) 305-2-777
						</p>
						<p className="cursor-pointer hover:text-primaryDark/90 dark:hover:text-primary/90">
							+375 (33) 303-2-777
						</p>
						<p className="cursor-pointer hover:text-primaryDark/90 dark:hover:text-primary/90">
							+375 (17) 275-2-777
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-[12px] items-center mr-[16px]">
					<div className="flex items-center gap-[5px] text-[20px]">
						<IoIosMap /> Адрес и режим работы:
					</div>
					<div className="flex flex-col text-primary text-[24px] dark:text-primaryDark font-alegreya">
						<p className="text-center w-[370px]">
							C 10:00 до 20:00 ежедневно г. Минск,пр Победителей 127 Работаем только
							по предварительной записи
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-[22px] items-center">
					<div className="flex flex-col gap-[12px] items-center">
						<div className="flex items-center gap-[5px] text-[20px]">
							<MdMailOutline /> Почта
						</div>
						<div className="flex flex-col text-primary text-[24px] dark:text-primaryDark font-alegreya">
							<p className="text-center w-[370px]">salonmeoww@gmail.com</p>
						</div>
					</div>
					<div className="flex flex-col gap-[12px] items-center">
						<div className="flex items-center gap-[5px] text-[20px]">
							<MdMailOutline /> Инстаграм
						</div>
						<div className="flex flex-col text-primary text-[24px] dark:text-primaryDark font-alegreya">
							<p className="text-center w-[370px]">salon_meow</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
