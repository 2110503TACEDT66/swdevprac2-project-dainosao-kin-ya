'use client'
import { useState } from 'react';
import styles from './banner.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Banner() {
    const covers = ['/img/cover1.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg'];
    const [index, setIndex] = useState(0);
    const router = useRouter();
    const { data: session } = useSession();
    console.log(session)
    return (
        <div className={styles.banner} onClick={() => setIndex(index + 1)}>
            <Image src={covers[index % 4]} alt='cover' fill={true} priority className='object-cover' />
            <div className="absolute inset-0 flex justify-center items-center">
                <div className='text-center z-20 bg-[#363062] w-[100%] py-2 bg-opacity-30 text-white'>
                    <div className='text-4xl font-medium'>Stay With Us</div>
                    <div className='text-xl font-serif'>Free Breakfast Free Wifi</div>
                </div>
            </div>
            {
                session ? <div className='z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl'>Welcome {session.user?.name}</div>
                : null
            }
            <button className='bg-[#F99417] text-white border border-[#F99417] font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
            hover:bg-white hover:text-[#F99417] hover:border-transparent'
            onClick={(e) => { e.stopPropagation(); router.push('/car')}}>
                View All Hotels
            </button>
        </div>
    );
}