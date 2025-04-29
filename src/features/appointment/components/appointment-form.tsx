import { useState } from 'react';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { APP_ROUTES, Button } from '../../../core';
const services = [
	{
		id: '1',
		title: 'Тримминг и стрижка собак всех пород',
		price: 'от 55 BYN',
		image: '/images/service1.png',
		subServices: [
			{
				title: 'Комплекс со стрижкой',
				price: 'от 50 BYN',
				description:
					'Полный комплекс грумерских услуг для таких собачек включает в себя: — мытье собаки с использованием правильной, подходящей вашему питомцу косметики (шампуни и бальзамы мировых брендов), — сушка и укладка специальным собачьим компрессором, — все гигиенические процедуры (чистка ушей, глаз, зубов специальной собачьей пастой, подстригание когтей), — любая стрижка по вашему заказу (есть большая фотогалерея готовых работ, в которой вы можете выбрать понравившуюся модель стрижки),— бантик для топ-нота (хвостика на голове) — парфюм для собак',
			},
			{
				title: 'Комплекс “лайт”',
				price: 'от 35 BYN',
				description:
					'Недорогой комплекс по уходу за собакой, который можно назвать «промежуточным» посещением грумера между основными стрижками. Вашу собачку:— помоют профессиональной косметикой (учитывающей ph собак и все особенности строения шерсти),— посушат собачьим компрессором, который не дует горячим воздухом,— проведут все гигиенические процедуры (чистка ушей, глаз, зубов, стрижка когтей),— побреют гигиенически «стратегические места» (около хвоста, «зону бикини», шерсть между подушечек лап). Окантуют шерсть вокруг лап. Основная длина на корпусе, голове и морде не убирается.— сбрызнут специальными духами для собак.',
			},
			{
				title: 'Стрижка машинкой (бритье)',
				price: 'от 40 BYN',
				description:
					'Некоторые собаки или, наоборот, их хозяева, плохо переносят надоедливое постоянное расчёсывание шерсти, распутывание колтунов, мытьё волосатых лап, на которых приносится домой куча грязи. Либо вам попросту некогда уделять столько времени на ежедневный домашний уход за шерстью любимца. Для таких случаев я могу предложить бритьё собаки машинкой под одну длину. Питомец станет короткошёрстным, а ваши усилия по поддержанию собаки и жилища в чистоте – минимальными.Комплекс со стрижкой в одну длину включает в себя:— бритьё собаки под одну длину (по вашему пожеланию собаку побреют ножом от 2 до 7 мм), можно оставить шерсть на голове, мордочке, хвосте,— мытьё профессиональной косметикой (шампунь, бальзам),— вся гигиена (чистка ушей, зубов специальной пастой со вкусом мяса, стрижка когтей),— сушка феном-компрессором для животных,— собачий парфюм',
			},
			{
				title: 'Комплекс с триммингом',
				price: 'от 60 BYN',
				description:
					'Триммингованная шерсть круглый год не нуждается в ежедневном расчёсывании, т к совершенно не спутывается, прекрасно отталкивает грязь и воду, не имеет специфического запаха.Комплекс с тримингом включает в себя:— профессиональный тримминг (а так же ролинг, «подщип», специальный вид триминга, после которого ваша собака не будет лысой или с проплешинами),— мытье с использованием шампуня и бальзама для жёской шерсти,— сушка и укладка специальным собачьим компрессором,— все гигиенические процедуры (чистка ушей, глаз, зубов специальной собачьей пастой, подстригание когтей),— стрижка лап-юбки-головы по вашему заказу (учту пожелания длины шерсти и общего вида),— парфюм для собак',
			},
			{
				title: 'Коррекция для тримингующихся пород',
				price: 'от 45 BYN',
				description:
					'Если шерсть вашей собаки ещё не созрела для полноценного тримминга, можно сделать коррекцию её стрижки по всем пунктам:— прочёсывание жёсткой шерсти на корпусе и частичное выщипывание,— мытье с использованием шампуня и бальзама для жёской шерсти,— сушка и укладка специальным собачьим компрессором,— все гигиенические процедуры (чистка ушей, глаз, зубов специальной собачьей пастой, подстригание когтей),— стрижка лап-юбки-головы по вашему заказу (учту пожелания длины шерсти и общего вида),— парфюм для собак',
			},
		],
	},
	{
		id: '2',
		title: 'Подготовка собак к выставкам',
		price: 'договорная',
		image: '/images/service2.png',
		subServices: [
			{
				title: 'Выставочная стрижка',
				price: 'от 100 BYN',
				description:
					'Полное соответствие стандартам породы, оформление шерсти в нужной форме для участия в конкурсах и выставках.',
			},
			{
				title: 'Укладка шерсти',
				price: 'от 85 BYN',
				description:
					'Специальная укладка с применением профессиональной косметики для придания блеска и четкости силуэта.',
			},
			{
				title: 'Экспертное вычесывание',
				price: 'от 65 BYN',
				description:
					'Удаление лишнего подшерстка и тщательная обработка шерсти для сохранения естественной текстуры.',
			},
			{
				title: 'Обработка защитными средствами',
				price: 'от 55 BYN',
				description:
					'Использование специализированных составов для защиты шерсти от внешних факторов и поддержания ее здоровья.',
			},
			{
				title: 'Создание выставочного образа',
				price: 'договорная',
				description:
					'Полный комплекс процедур для подготовки питомца к показу, включая груминг, укладку и оформление.',
			},
		],
	},
	{
		id: '3',
		title: 'Декоративные услуги',
		price: 'от 55 BYN',
		image: '/images/service3.png',
		subServices: [
			{
				title: 'Окрашивание шерсти',
				price: 'от 60 BYN',
				description:
					'Безопасное окрашивание шерсти с использованием натуральных и гипоаллергенных красителей. Возможен выбор цветовой палитры.',
			},
			{
				title: 'Тату на шерсти',
				price: 'от 50 BYN',
				description:
					'Создание временных узоров на шерсти питомца специальными красками, которые безопасны и легко смываются.',
			},
			{
				title: 'Декоративные стрижки',
				price: 'от 70 BYN',
				description:
					'Создание уникального образа для вашего питомца с возможностью выбора формы и длины шерсти.',
			},
			{
				title: 'Украшение аксессуарами',
				price: 'от 40 BYN',
				description:
					'Добавление декоративных элементов, таких как банты, стразы, заколки или стильные ленты.',
			},
			{
				title: 'Фантазийная укладка',
				price: 'от 75 BYN',
				description:
					'Придание шерсти уникальной формы с использованием специальных укладочных средств.',
			},
		],
	},
	{
		id: '4',
		title: 'Стрижка и вычесывание котов',
		price: 'от 55 BYN',
		image: '/images/service4.png',
		subServices: [
			{
				title: 'Удаление колтунов',
				price: 'от 50 BYN',
				description:
					'Аккуратное избавление от спутанной шерсти с использованием безопасных инструментов, не вызывающих стресс у питомца.',
			},
			{
				title: 'Вычесывание подшерстка',
				price: 'от 45 BYN',
				description:
					'Глубокая обработка шерсти, удаляющая выпавшие волоски и предотвращающая образование колтунов.',
			},
			{
				title: 'Классическая стрижка',
				price: 'от 60 BYN',
				description:
					'Придание аккуратного и ухоженного внешнего вида с учетом особенностей породы и предпочтений владельца.',
			},
			{
				title: 'Гигиеническая обработка',
				price: 'от 40 BYN',
				description:
					'Чистка ушей, глаз, подушечек лап и когтей для поддержания здоровья и комфорта питомца.',
			},
			{
				title: 'Моделирование образа',
				price: 'от 75 BYN',
				description:
					'Создание стильного внешнего вида с учетом особенностей шерсти и пожеланий владельца.',
			},
		],
	},
	{
		id: '5',
		title: 'Гигиенические процедуры',
		price: 'от 40 BYN',
		image: '/images/service5.png',
		subServices: [
			{
				title: 'Чистка ушей',
				price: 'от 25 BYN',
				description:
					'Удаление загрязнений, предотвращение инфекций и поддержание здоровья ушного канала.',
			},
			{
				title: 'Подрезка когтей',
				price: 'от 20 BYN',
				description:
					'Безопасное укорачивание когтей с использованием специальных инструментов, исключающих риск травм.',
			},
			{
				title: 'Чистка зубного налета',
				price: 'от 30 BYN',
				description:
					'Гигиеническая обработка зубов с использованием профессиональных паст и щеток.',
			},
			{
				title: 'Гигиена шерсти',
				price: 'от 35 BYN',
				description:
					'Очистка шерсти с применением специальных шампуней и кондиционеров для блеска и мягкости.',
			},
			{
				title: 'Уход за лапами',
				price: 'от 25 BYN',
				description:
					'Обработка подушечек лап, предотвращающая сухость, растрескивание и дискомфорт при ходьбе.',
			},
		],
	},
	{
		id: '6',
		title: 'Экспресс-линька собак всех пород',
		price: 'от 55 BYN',
		image: '/images/service6.png',
		subServices: [
			{
				title: 'Глубокое вычесывание',
				price: 'от 50 BYN',
				description:
					'Удаление старого подшерстка для комфорта животного, уменьшая линьку и загрязнение дома.',
			},
			{
				title: 'Массаж кожи',
				price: 'от 40 BYN',
				description:
					'Стимуляция кровообращения и укрепление шерсти, улучшение состояния кожи и рост новых волосков.',
			},
			{
				title: 'Обработка антистатиком',
				price: 'от 35 BYN',
				description:
					'Устранение статического электричества для комфорта собаки и удобства владельца.',
			},
			{
				title: 'Оздоровительный шампунь',
				price: 'от 45 BYN',
				description:
					'Использование специальных шампуней для питания шерсти, ее укрепления и защиты.',
			},
			{
				title: 'Уход за шерстью после процедуры',
				price: 'от 55 BYN',
				description:
					'Финишная обработка шерсти с использованием кондиционеров и защитных средств.',
			},
		],
	},
];

export const AppointmentForm = () => {
	const [selectedService, setSelectedService] = useState('');
	const [selectedSubService, setSelectedSubService] = useState('');
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	const [name, setName] = useState('');
	const [petName, setPetName] = useState('');
	const [showServiceDropdown, setShowServiceDropdown] = useState(false);
	const [showSubServiceDropdown, setShowSubServiceDropdown] = useState(false);
	const [showDatePicker, setShowDatePicker] = useState(false);
	const navigate = useNavigate();
	const handleSubmit = () => {
		if (!name || !petName || !selectedService || !selectedSubService || !selectedDate) {
			toast.error('Пожалуйста, заполните все поля!');
			return;
		}

		const newAppointment = {
			id: crypto.randomUUID(),
			name,
			petName,
			service: selectedService,
			subService: selectedSubService,
			date: selectedDate,
		};

		const existingAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
		localStorage.setItem(
			'appointments',
			JSON.stringify([...existingAppointments, newAppointment]),
		);
		toast.success('Запись успешно добавлена!');
		navigate(APP_ROUTES.home.route);
	};

	return (
		<div className="flex flex-col justify-center items-center gap-[81px] ">
			<div className="flex relative flex-col w-[1240px] h-fit gap-[45px] rounded-[20px] items-center bg-primary dark:bg-primaryDark pt-[54px] pb-[30px]">
				<div className="flex flex-col gap-[10px] items-center justify-center">
					<p className="text-[20px]">Введите Ваше имя</p>
					<input
						autoComplete="off"
						onChange={(e) => setName(e.target.value)}
						className="w-[588px] text-[40px] h-[90px] bg-white rounded-[15px] shadow-md px-[20px]"
					></input>
				</div>
				<div className="flex flex-col gap-[10px] items-center justify-center">
					<p className="text-[20px]">Введите кличку питомца</p>
					<input
						autoComplete="off"
						onChange={(e) => setPetName(e.target.value)}
						className="w-[588px] text-[40px] h-[90px] bg-white rounded-[15px] shadow-md px-[20px]"
					></input>
				</div>
				<Button
					onClick={() => setShowServiceDropdown(!showServiceDropdown)}
					className="h-[60px] w-fit rounded-[15px] text-[24px]  bg-[white] dark:bg-white text-primary dark:text-primaryDark"
				>
					<div className="flex gap-[5px] items-center">
						<p>{selectedService ? selectedService : 'Выбрать услугу'}</p>
						<BsFillCaretRightFill className="w-[24px] h-[24px]" />
					</div>
				</Button>
				{showServiceDropdown && (
					<div className="bg-white rounded-[15px] p-[10px] shadow-md">
						{services.map((service) => (
							<p
								key={service.id}
								onClick={() => {
									setSelectedService(service.title);
									setSelectedSubService('');
									setShowServiceDropdown(false);
								}}
								className="cursor-pointer hover:text-primary"
							>
								{service.title}
							</p>
						))}
					</div>
				)}
				{selectedService && (
					<Button
						onClick={() => setShowSubServiceDropdown(!showSubServiceDropdown)}
						className="h-[60px] w-fit rounded-[15px] text-[24px]  bg-[white] dark:bg-white text-primary dark:text-primaryDark"
					>
						<div className="flex gap-[5px] items-center">
							<p>{selectedSubService ? selectedSubService : 'Выбрать подуслугу'}</p>
							<BsFillCaretRightFill className="w-[24px] h-[24px]" />
						</div>
					</Button>
				)}
				{selectedService && showSubServiceDropdown && (
					<div className="bg-white rounded-[15px] p-[10px] shadow-md">
						{services
							.find((service) => service.title === selectedService)
							?.subServices.map((sub) => (
								<p
									key={sub.title}
									onClick={() => {
										setSelectedSubService(sub.title);
										setShowSubServiceDropdown(false);
									}}
									className="cursor-pointer hover:text-primary"
								>
									{sub.title}
								</p>
							))}
					</div>
				)}
				<Button
					onClick={() => setShowDatePicker(!showDatePicker)}
					className="h-[60px] w-[383px] rounded-[15px] text-[24px] bg-[white] dark:bg-white text-primary dark:text-primaryDark"
				>
					<div className="flex gap-[5px] items-center">
						<p>Выбрать дату и время</p>
						<BsFillCaretRightFill className="w-[24px] h-[24px]" />
					</div>
				</Button>
				{showDatePicker && (
					<input
						type="date"
						onChange={(e) => setSelectedDate(new Date(e.target.value))}
						className="p-[10px] rounded-md bg-white"
					/>
				)}
				<img src="/images/app-cat.png" alt="cat" className="absolute bottom-0 left-0" />
			</div>

			<Button
				onClick={() => handleSubmit()}
				className="h-[60px] w-[383px] rounded-[15px] text-[24px]"
			>
				Записаться
			</Button>
		</div>
	);
};
