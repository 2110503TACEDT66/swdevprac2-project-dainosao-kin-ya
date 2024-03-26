'use client'

import deleteReservation from "@/libs/deleteReservation"
import { useRouter } from "next/navigation"

export default function DeleteReserve({token, rid}:{token:string, rid:string}){
    const router = useRouter()
    async function deleteReservations(){
        if(token && rid){
            await deleteReservation(token , rid)
            window.location.reload
            router.push('/reservations/mybooking')
        }
    }

    return(
        <button className="px-3 py-1 text-white shadow-sm rounded-lg bg-red-600 absolute h-[40px] w-[80px] right-[2%] top-2"
        onClick={deleteReservations}>Delete</button>
    )
}