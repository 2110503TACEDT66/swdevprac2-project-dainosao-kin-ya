'use client'

import ProductCard from "./ProductCard";
import Link from "next/link";
import { HotelJson, HotelItem } from "interfaces";
import { useState } from "react";
import { checkFav } from "@/redux/features/favSlice";
import { useAppSelector } from "@/redux/store"
import { AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"
import { useReducer } from "react";

export default async function HotelCatalog({hotelJson}:{hotelJson:Promise<HotelJson>}){

    const [favourite,setFavourite] = useState(false);
    const favItems = useAppSelector((state)=>state.favSlice.favItems)
    // //console.log(carItems)
    const dispatch = useDispatch<AppDispatch>()

    // const favReducer = (favList:Map<string, boolean>, action:{hotelName:string, fav:boolean})=>{
    //     if(action.hotelName){
    //         if(favList.has(action.hotelName)){
    //             if(!action.fav){
    //                 favList.delete(action.hotelName)
    //             }
    //         }
    //         else{
    //             if(action.fav){
    //                 favList.set(action.hotelName, action.fav)
    //             }
    //         }
    //     }
    // }

    // const [favList, dispatchFav] = useReducer(favReducer, new Map<string,boolean>)


    const hotelJsonReady = await hotelJson
    return (
        <>
        <div className="font-medium italic text-[#4D4C7D] pt-2">
        Explore {hotelJsonReady.count} models in our catalog
        </div>
        <div>
            <button className='bg-[#F99417] text-white border-2 border-[#F99417] font-semibold py-2 px-2 m-2 mt-5 rounded
            hover:bg-white hover:text-[#F99417] '
            onClick={(e) => { e.stopPropagation(); setFavourite(!favourite); }}>
                {favourite? 'Show all hotels' : 'Show only favourtie'}
            </button>
        </div>
        <div style={{margin: "20px", display:"flex", flexDirection:"row", alignContent:"space-around", justifyContent:"space-around", flexWrap:"wrap"}}>
                {
                    hotelJsonReady.data.map((hotelItem:HotelItem)=>(
                        <Link href={`/hotels/${hotelItem.id}`} 
                        className="w-[100%] sm:w-[55%] md:w-[35%] lg:w-[30%]
                        p-2 sm:p-4 md:p-4 lg:p-8">
                        <ProductCard hotelName={hotelItem.name} region={hotelItem.region} fav={false} imgSrc={hotelItem.picture}/>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}