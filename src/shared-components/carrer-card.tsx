import { memo } from 'react';

type Carrer = {
    id: number;
    startDate: string;
    endDate: string;
    title: string;
    institute: string;
    description: string;
    technologies?: string[];
}

type CarrerCardProps = {
    carrer: Carrer;
}

const CarrerCard = memo(({ carrer }:CarrerCardProps) => {
   return(
    <div className='carrer-card'>
        <div className='col-span-1 font-headings'>
            <p className='text-lg text-gray-600 mb-4 md:mb-0'>{carrer.startDate} - {carrer.endDate}</p>
        </div>
        <div className='col-span-2'>
            <h3 className='text-xl font-semibold font-headings mb-2'>{carrer.title}</h3>
            <h4 className='text-lg font-semibold font-headings text-gray-600 mb-2'>{carrer.institute}</h4>
            <p className='text-justify text-base font-paragraphs font-light text-gray-600'>{carrer.description}</p>
        </div>
    </div>
   )
});

export default CarrerCard;