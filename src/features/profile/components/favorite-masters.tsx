import { useEffect, useState } from 'react';
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

export const FavoritesGrid = () => {
	const [favoriteMasters, setFavoriteMasters] = useState<string[]>([]);

	useEffect(() => {
		const storedFavorites = localStorage.getItem('favoriteMasters');
		if (storedFavorites) {
			setFavoriteMasters(JSON.parse(storedFavorites));
		}
	}, []);

	const favoriteSlides = slides.filter((slide) => favoriteMasters.includes(slide.id));

	const toggleFavorite = (id: string) => {
		const isFavorite = favoriteMasters.includes(id);
		const updatedFavorites = isFavorite
			? favoriteMasters.filter((favId) => favId !== id)
			: [...favoriteMasters, id];

		setFavoriteMasters(updatedFavorites);
		localStorage.setItem('favoriteMasters', JSON.stringify(updatedFavorites));
	};

	return (
		<div className="flex flex-col p-[30px] self-center  min-h-[328px] w-[1240px] bg-white px-[60px] dark:bg-bgDark gap-[30px] shadow-lg rounded-[15px] text-center relative border-[3px] border-primary dark:border-primaryDark">
			<p className="dark:text-white text-[36px] self-start">Избранное</p>
			<div className="flex flex-wrap gap-[30px] justify-center">
				{favoriteSlides.length > 0 ? (
					favoriteSlides.map((slide) => (
						<div
							key={slide.id}
							className="flex flex-col w-[400px] h-[730px] bg-white dark:bg-bgDark rounded-lg shadow-lg text-center relative"
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
								alt={`slide-${slide.id}`}
								className="mx-auto rounded-md"
							/>
							<p className="px-[28px] pt-[15px] font-alegreya text-[24px] text-center dark:text-white">
								{slide.text}
							</p>
						</div>
					))
				) : (
					<p className="text-[24px] font-bold font-alegreya text-center self-center">
						здесь будут отображаться специалисты, которые произвели на вас и на вашего
						питомца наиболее приятные впечатления!
					</p>
				)}
			</div>
		</div>
	);
};
