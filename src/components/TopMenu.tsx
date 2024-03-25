import styles from './topmenu.module.css'
import Image from 'next/image'
import TopMenuItem from './TopMenuItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Link } from '@mui/material'
import { Session } from 'inspector'

export default async function TopMenu(){
    const session = await getServerSession(authOptions)

    return (
        <div className={styles.menucontainer}>
            <Image src={'/img/logo.png'} className={styles.logoimg} alt='logo' width={0} height={0} sizes='100vh'/>
            {
                session? 
                <div className='z-30 flex flex-row w-[100%]'>
                    <div className='flex justify-start items-center h-full mx-2'>
                    <TopMenuItem title='View Hotels' pageRef='/hotels'/>
                    <TopMenuItem title='My Booking' pageRef='/reservations/mybooking'/>
                    </div>
                    
                    <Link href="/api/auth/signout">
                        <div className='flex items-center right-0 absolute h-full px-2 mx-5 text-white text-md'>
                        {session.user?.name}</div>
                    </Link>
                </div>
                
                :   <div  className='flex flex-row absolute right-0 h-full w-[100%]'>
                        <Link href="/api/auth/signin" className='decoration-none'>
                        <div className='flex items-center right-0 absolute h-full px-2 mx-5 text-white text-md'>
                        Sign-In</div></Link>
                    </div>
                
            }
        </div>
    )
}