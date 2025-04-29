import { useState } from 'react';
import { Services, ServicesHeader } from '../components';

export const ServicesScreen = () => {
	const [selectedPet, setSelectedPet] = useState('all');
	return (
		<div className="flex flex-col gap-[28px] mb-[135px]">
			<ServicesHeader selectedPet={selectedPet} setSelectedPet={setSelectedPet} />
			<Services selectedPet={selectedPet} />
		</div>
	);
};
