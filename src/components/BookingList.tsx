'use client'
import { useAppSelector } from "@/redux/store";
import { removeReservation } from "@/redux/features/reserveSlice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";

export default function BookingList () {
    const hotelItems = useAppSelector((state)=> state.reserveSlice.reserveItems)
    const dispatch = useDispatch<AppDispatch>()
    // return (
    //     <>
             
        
    //     </>
    // )

    return (
        <div className="">
            <div className="text-[#363062] flex flex-col items-center justify-center my-10 mr-[20%]">
                <div className="font-semibold text-5xl m-10">Your Reservations</div>
                {hotelItems && hotelItems.length > 0 ? (
                hotelItems.map((hotelItem) => (
                    <div className="bg-slate-200 rounded-lg w-[77%] h-[150px] relative flex flex-row shadow-lg">
                            <div className="h-full w-[30%] relative rounded-lg">
                                <Image src={'/img/cover1.jpg'} alt='hosImg' fill={true} className="object-cover rounded-lg"/>                   
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-row text-4xl font-semibold underline relative left-7 top-2"> Lemerada</div>
                                <div className="text-lg m-2 relative left-6 top-2 font-medium">
                                    <div>User: Punpao</div>
                                    <div>Reservation Date: 555555</div>
                                    <div>Total Night: 66666</div>
                                </div>
                            </div>
                            <Link href='/reservations/edit'>
                            <button className="px-3 py-1 text-white shadow-sm rounded-lg bg-yellow-400 absolute h-[40px] w-[80px] right-[14%] top-2" 
                            >Edited</button></Link>
                            <button className="px-3 py-1 text-white shadow-sm rounded-lg bg-red-600 absolute h-[40px] w-[80px] right-[2%] top-2"
                            onClick={ () => dispatch(removeReservation(hotelItem))}>Delete</button>
                    </div>
                ))

            ):(
                <div className="absolute inset-0 flex justify-center items-center text-gray-500 mr-[20%]">No reservation</div>
            )}
            </div> 


            <div className="absolute h-full w-[25%] top-0 right-0 bottom-0 mt-[50px]">
            <div className="w-full h-[15%]">
            <div className="h-[20%] bg-white-200 text-center">
                <div className="underline text-[#F99417]">User's datails</div>
                <div className="text-3xl text-[#363062]">User Name</div>
            </div>
            </div>
            <div className="w-full h-[85%] bg-[#4D4C7D]">
                <br/>
            <div className="m-5 my-5">Name: User Name</div>
                <div className="m-5">Tel: 0987654321</div>
                <div className="m-5">Email: Plhormak@gmail.com</div>
                <div className="m-5">Member Since: 1/1/2005</div>
                <div className="absolute bottom-[10%] w-full flex justify-center"> 
                    <Link href="/api/auth/signout">
                        <button className="text-xl italic text-center bg-[#F99417] rounded-lg px-10 py-2">Sign-Out</button>
                    </Link>
                </div>
            </div>
        </div> 


        </div>
    )
}

    
    
    
    
    
    
