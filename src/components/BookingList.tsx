import Image from "next/image";
import Link from "next/link";
import { ReserveJson, Reservation } from "interfaces";
import getReservation from "@/libs/getReservation";
import { useSession } from "next-auth/react";
import dayjs, { Dayjs } from "dayjs";
import { getToken } from "next-auth/jwt";
import { data } from "node_modules/cypress/types/jquery";
import { wait } from "node_modules/@testing-library/user-event/dist/types/utils";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import deleteReservation from "@/libs/deleteReservation";
import { redirect } from "next/navigation";
import DeleteReserve from "./DeleteReserve";


export default async function BookingList ({reserveJson}:{reserveJson:Promise<ReserveJson>}) {
    //const { data: session } = useSession();
    const reserveJsonReady = await reserveJson
    const token = getToken
    const session = await getServerSession(authOptions) ;
    if ( !session || !session.user.token) return null

    // async function deleteReservations(hid : string){
    //     if(session?.user.token && hid){
    //         await deleteReservation(session?.user.token , hid)
    //         redirect('/reservations/mybooking')
    //     }
    // }

    return (
        <div>
            <div className="text-[#363062] flex flex-col items-center justify-center my-10 mr-[20%]">
            <div className="font-semibold text-5xl m-10">Your Reservations</div>
                
            { (reserveJsonReady && reserveJsonReady.count > 0) ? 
            (
                reserveJsonReady.data.map((reserve:Reservation) => (
                    <div className="bg-slate-200 mb-10 rounded-lg w-[77%] h-[150px] relative flex flex-row shadow-lg" key={reserve._id}>
                            <div className="h-full w-[30%] relative rounded-lg">
                                <Image src={reserve.hotel.picture} alt='hosImg' fill={true} className="object-cover rounded-l-lg"/>                   
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-row text-4xl font-semibold underline relative left-7 top-2"> {reserve.hotel.name}</div>
                                <div className="text-lg m-2 relative left-6 top-2 font-medium">
                                    <div>User: {reserve.user.name}</div>
                                    <div>Reservation Date: {dayjs(reserve.revDate).format("YYYY/MM/DD")}</div>
                                    <div>Total Night: {reserve.nightNum}</div>
                                </div>
                            </div>
                            <Link  href={`/reservations/${reserve._id}?hid=${reserve.hotel.id}&name=${reserve.hotel.name}`}>
                            <button className="px-3 py-1 text-white shadow-sm rounded-lg bg-[#F99417] absolute h-[40px] w-[80px] right-[14%] top-2" 
                            >Edit</button></Link>
                        
                            <DeleteReserve token={session.user.token} rid={reserve._id}/>
                            
                    </div>
                ))
            )
            :(<div className="absolute inset-0 flex justify-center items-center text-gray-500 mr-[20%]">No reservation</div>)
            }
            </div> 


             


        </div>
    )
}

    
    
    
    
    
    
