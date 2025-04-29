import { useNavigate } from 'react-router-dom';

const services = [
	{
		id: 1,
		title: 'Тримминг и стрижка собак всех пород',
		price: 'от 55 BYN',
		type: 'dog',
		image: '/images/service1.png',
	},
	{
		id: 2,
		title: 'Подготовка собак к выставкам',
		price: 'договорная',
		type: 'dog',
		image: '/images/service2.png',
	},
	{
		id: 3,
		title: 'Декоративные услуги',
		price: 'от 55 BYN',
		type: 'dog',
		image: '/images/service3.png',
	},
	{
		id: 4,
		title: 'Стрижка и вычесывание котов',
		price: 'от 55 BYN',
		type: 'cat',
		image: '/images/service4.png',
	},
	{
		id: 5,
		title: 'Гигиенические процедуры',
		price: 'от 40 BYN',
		type: 'cat',
		image: '/images/service5.png',
	},
	{
		id: 6,
		title: 'Экспресс-линька собак всех пород',
		price: 'от 55 BYN',
		type: 'dog',
		image: '/images/service6.png',
	},
];
type Props = {
	selectedPet: string;
};
export const Services = ({ selectedPet }: Props) => {
	const navigate = useNavigate();
	const filteredServices =
		selectedPet === 'all'
			? services
			: services.filter((service) => service.type === selectedPet);

	return (
		<div className="flex flex-wrap text-[20px] justify-center gap-[30px] w-full rounded-[15px]">
			{filteredServices.map((service) => (
				<div
					key={service.id}
					className="flex flex-col w-[360px] h-[450px] items-center bg-white dark:bg-bgDark gap-[5px] shadow-lg rounded-[15px] text-center relative border-[3px] border-primary dark:border-primaryDark"
				>
					<img
						src={service.image}
						alt={service.title}
						className="w-full h-[250px] rounded-t-[15px]"
					/>
					<p className="text-[20px] text-center w-[232px] font-bold text-black dark:text-white">
						{service.title}
					</p>
					<div className="absolute bottom-[28px] flex flex-col items-center gap-[5px] font-alegreya">
						<p className="text-[20px] text-black dark:text-white">
							Цена: {service.price}
						</p>
						<p
							onClick={() => navigate(`${service.id}`)}
							className=" text-primary rounded-lg hover:text-primaryDark dark:text-primaryDark dark:hover:text-primary hover:underline cursor-pointer"
						>
							Подробнее
						</p>
					</div>
				</div>
			))}
		</div>
	);
};
