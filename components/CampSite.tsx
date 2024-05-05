import Image from 'next/image';
import { CampProps } from './Camp';

export const CampSite = ({ backgroundImage, title, peopleJoined }: CampProps) => {
    return (
        <div className={`h-full w-full min-w-[1100px]' ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl `}>
            <div className='flex h-full flex-col items-start justify-between p-6 lg:py-10 '>
                <div className='flexCenter gap-4'>
                    <div className='rounded-full bg-green-50 p-4'>
                        <Image src="/foled-map.svg" alt="map"
                            width={28} height={28} />

                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4 className="bold-18 text-white ">{title}</h4>
                        <p className="bold-14 text-white ">{subtitle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
