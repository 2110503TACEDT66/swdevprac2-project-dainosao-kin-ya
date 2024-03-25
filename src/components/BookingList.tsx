'use client'
import { useAppSelector } from "@/redux/store";
import { removeReservation } from "@/redux/features/cartSlice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";

export default function BookingList () {
    const hotelItems = useAppSelector((state)=> state.cartSlice.carItems)
    const dispatch = useDispatch<AppDispatch>()
    return (
        <>
            {hotelItems && hotelItems.length > 0 ? (
                hotelItems.map((hotelItem) => (
                    <div className="bg-slate-200 rounded px-5 py-2 my-2 " key={hotelItem.carId}>
                        <div className="text-xl">{hotelItem.carModel}</div> 
                        <div className="text-sm">User: {hotelItem.carId}</div>
                        <div className="text-sm">Reservation Date: {hotelItem.carModel}</div>
                        <div className="text-sm">Total Night: {hotelItem.pickupDate}</div>

                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm" onClick={() => dispatch(removeReservation(hotelItem))}>Remove from Cart</button>
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm" onClick={() => dispatch(removeReservation(hotelItem))}>Remove from Cart</button>


                    </div>
                ))

            ):(
                <div className="absolute inset-0 flex justify-center items-center">No reservation</div>
            )} 
        
        </>
    )
}