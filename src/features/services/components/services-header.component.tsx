import { PiPawPrint } from 'react-icons/pi';
import { TbCat, TbDog } from 'react-icons/tb';
import { Button } from '../../../core';
type Props = {
	selectedPet: string;
	setSelectedPet: (value: string) => void;
};

export const ServicesHeader = ({ selectedPet, setSelectedPet }: Props) => {
	return (
		<div className="flex justify-between items-center w-full text-[36px] text-black dark:text-white">
			<p>Услуги</p>
			<Button
				onClick={() => {
					selectedPet === 'dog'
						? setSelectedPet('cat')
						: selectedPet === 'cat'
							? setSelectedPet('all')
							: setSelectedPet('dog');
				}}
				className="w-[240px] h-[60px] rounded-[15px]"
			>
				<div className="flex gap-[10px] justify-center items-center text-[20px] ">
					<p>Выбрать</p>
					{selectedPet === 'dog' ? (
						<TbCat className="w-[24px] h-[24px] text-white" />
					) : selectedPet === 'cat' ? (
						<PiPawPrint className="w-[24px] h-[24px] text-white" />
					) : (
						<TbDog className="w-[24px] h-[24px] text-white" />
					)}
				</div>
			</Button>
		</div>
	);
};
