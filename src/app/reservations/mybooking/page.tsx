import BookingList from "@/components/BookingList";
import User from "@/components/User";
import getReservation from "@/libs/getReservation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"

export default async function ManageReservations(){
    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const reserve = await getReservation(session.user.token)
    return(
        <main>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
            <BookingList reserveJson={reserve}/>
            </Suspense>
            <User/>
        </main>
    )
}