import { useEffect, useState } from 'react';
import { BsCaretRightFill } from 'react-icons/bs';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';
import 'swiper/css';
import 'swiper/css/navigation';
const slides = [
	{
		id: '1',
		text: 'Знакомьтесь с Дарьей! Профессионал с более чем 5 лет опыта в груминге. Дарья заботится о каждом питомце, создавая стильные образы и даря радость!',
		image: '/images/groomer1.png',
	},
	{
		id: '2',
		text: 'Встречайте Ксению! Настоящий эксперт в уходе за животными. С 8 летним опытом, Ксения преобразит вашего любимца с любовью и вниманием!',
		image: '/images/groomer2.png',
	},
	{
		id: '3',
		text: 'Встречайте Евгению! Настоящий эксперт в уходе за животными. С 5 летним опытом, Ксения преобразит вашего любимца с любовью и вниманием!',
		image: '/images/groomer2.png',
	},
	{
		id: '4',
		text: 'Встречайте Веронику! Настоящий эксперт в уходе за животными. С 10 летним опытом, Ксения преобразит вашего любимца с любовью и вниманием!',
		image: '/images/groomer2.png',
	},
];

export const AboutUsSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [fill, setFill] = useState('DEC4FF');
	const [favoriteMasters, setFavoriteMasters] = useState<string[]>([]);

	useEffect(() => {
		localStorage.getItem('theme') === 'false' ? setFill('#DEC4FF') : setFill('#66517F');

		const storedFavorites = localStorage.getItem('favoriteMasters');
		if (storedFavorites) {
			setFavoriteMasters(JSON.parse(storedFavorites));
		}
	}, []);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 2) % slides.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? slides.length - 2 : (prevIndex - 2 + slides.length) % slides.length,
		);
	};

	const toggleFavorite = (id: string) => {
		const isFavorite = favoriteMasters.includes(id);
		const updatedFavorites = isFavorite
			? favoriteMasters.filter((favId) => favId !== id)
			: [...favoriteMasters, id];

		setFavoriteMasters(updatedFavorites);

		localStorage.setItem('favoriteMasters', JSON.stringify(updatedFavorites));
	};

	return (
		<div className="flex items-center justify-center w-full mb-[60px]">
			<BsCaretRightFill
				className="rotate-180 w-[150px] h-[150px] text-primary dark:text-primaryDark cursor-pointer hover:text-primaryDark/90 dark:hover:text-primary/90"
				onClick={prevSlide}
			/>

			<div className="flex gap-[226px]">
				{[0, 1].map((offset) => {
					const slideIndex = (currentIndex + offset) % slides.length;
					const slide = slides[slideIndex];

					return (
						<div
							key={slide.id}
							className="flex flex-col w-[400px] h-[730px] bg-white dark:bg-bgDark rounded-lg shadow-lg  text-center relative"
						>
							{favoriteMasters.includes(slide.id) ? (
								<IoHeartSharp
									className="absolute top-[10px] left-[10px] size-[50px] text-primary dark:text-primaryDark cursor-pointer"
									onClick={() => toggleFavorite(slide.id)}
								/>
							) : (
								<IoHeartOutline
									className="absolute top-[10px] left-[10px] size-[50px] text-primary dark:text-primaryDark cursor-pointer"
									onClick={() => toggleFavorite(slide.id)}
								/>
							)}
							<img
								src={slide.image}
								alt={`slide-${slideIndex}`}
								className="mx-auto rounded-md"
							/>
							<p className="px-[28px] pt-[15px] font-alegreya text-[24px] text-center dark:text-white">
								{slide.text}
							</p>
						</div>
					);
				})}
			</div>

			<BsCaretRightFill
				className="w-[150px] h-[150px] text-primary dark:text-primaryDark cursor-pointer hover:text-primaryDark/90 dark:hover:text-primary/90"
				onClick={nextSlide}
			/>
		</div>
	);
};
