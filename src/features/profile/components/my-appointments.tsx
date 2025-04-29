import { format } from 'date-fns';
import { useEffect, useState } from 'react';

const getAppointments = () => JSON.parse(localStorage.getItem('appointments') || '[]');

export const MyAppointments = () => {
	const [records, setRecords] = useState<any>([]);

	useEffect(() => {
		setRecords(getAppointments());
	}, []);

	const currentDate = new Date();

	const deleteRecord = (id: string) => {
		const updatedRecords = records.filter((record: any) => record.id !== id);
		setRecords(updatedRecords);
		localStorage.setItem('appointments', JSON.stringify(updatedRecords));
	};

	console.log(records);
	return (
		<div className="text-[20px] flex items-start flex-col w-[1240px] h-fit bg-white px-[60px]  dark:bg-bgDark gap-[30px] shadow-lg rounded-[15px] text-center relative border-[3px] border-primary dark:border-primaryDark self-center pb-[45px] pt-[40px]">
			<p className="dark:text-white text-[36px] self-start">Мои записи</p>
			<div className="flex flex-col gap-[20px] w-full items-start">
				<h2 className="text-[24px] font-bold text-black dark:text-white">
					Активные записи
				</h2>
				<div className="flex-wrap flex gap-[20px]">
					{records.length &&
						records
							.filter((record: any) => new Date(record.date) > currentDate)
							.map((record: any) => (
								<div
									key={record.id}
									className="p-[15px] bg-primary dark:bg-primaryDark shadow-lg rounded-[15px] border-primary"
								>
									<>{() => console.log(record)}</>
									<p className="text-[20px] font-bold">{record.service}</p>
									<p>Имя: {record.name}</p>
									<p>Имя питомца: {record.petName}</p>
									<p>Дата: {format(new Date(record.date), 'dd/MM/yyyy')}</p>
									<button
										onClick={() => deleteRecord(record.id)}
										className="mt-[10px] text-red-500 hover:underline"
									>
										Отменить запись
									</button>
								</div>
							))}
				</div>

				<h2 className="text-[24px] font-bold text-black dark:text-white mt-[30px]">
					Прошедшие записи
				</h2>
				{records.filter((record: any) => new Date(record.date) <= currentDate).length ===
				0 ? (
					<p className=" dark:text-white">
						На данный момент у вас нет прошедших записей.
					</p>
				) : (
					records
						.filter((record: any) => new Date(record.date) <= currentDate)
						.map((record: any) => (
							<div
								key={record.id}
								className="p-[15px] bg-gray-300 shadow-lg rounded-[15px] border-gray-500"
							>
								<p className="text-[20px] font-bold">{record.service}</p>
								<p>Имя: {record.name}</p>
								<p>Имя питомца: {record.petName}</p>
								<p>Дата: {format(new Date(record.date), 'dd/MM/yyyy')}</p>
							</div>
						))
				)}
			</div>
		</div>
	);
};
