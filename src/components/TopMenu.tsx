import styles from './topmenu.module.css'
import Image from 'next/image'
import TopMenuItem from './TopMenuItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Link } from '@mui/material'

export default async function TopMenu(){
    const session = await getServerSession(authOptions)

    return (
        <div className={styles.menucontainer}>
            <Image src={'/img/logo.png'} className={styles.logoimg} alt='logo' width={0} height={0} sizes='100vh'/>
            <div className='flex flex-row absolute right-0 h-full'>
            {
                session? 
                <div>
                <TopMenuItem title='View Hotels' pageRef='/hotel'/>
                <Link href="/api/auth/signout">
                    <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
                    {session.user?.name}</div></Link></div>
                    : <Link href="/api/auth/signin" className='decoration-none'>
                    <div className='flex items-center h-full px-2 text-white text-sm'>
                    Sign-In</div></Link>
            }
            </div>
        </div>
    )
}