'use client'
import Image from "next/image";
import styles from "./card.module.css"
import InteractiveCard from './InteractiveCard'
import { Rating } from "@mui/material";
import React,{useState} from "react";
import { checkFav } from "@/redux/features/favSlice";
import { useAppSelector } from "@/redux/store"
import { AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function ProductCard({hotelName, imgSrc, region, fav, onCompare}:{hotelName:string, imgSrc:string,region:string, fav:boolean, onCompare?:Function}){
    // function onCarSelect(){
    //     alert("You Select " + carName)
    // }
    console.log(imgSrc)

    //const heartImg = ['/img/heart.png','/img/heart_switched.png']
    // const [heartState,setHeart] = useState(false);
    const favItems = useAppSelector((state)=>state.favSlice.favItems)
    //console.log(carItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <InteractiveCard contentName={hotelName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <div className="absolute right-0 mr-3 z-10 mt-2">
                    <Image src={fav ? '/img/heart_switched.png' : '/img/heart.png'} alt="unlighted heart" width={30} height={30} 
                    onClick={(e)=>{
                        e.preventDefault(); e.stopPropagation();
                        // setHeart(!heartState);
                        dispatch(checkFav({name:hotelName, fav: !fav}))
                        }}/>
                </div>
                <Image src={imgSrc}
                alt = 'Hotel Picture'
                fill={true}
                className="object-cover rounded-t-lg"/>
            </div>
            <div className='w-full h-[15%] p-[10px] text-xl text-left underline font-medium text-[#363062]'>
                {hotelName}
            </div>
            <div className='w-full h-[15%] p-[3px] ml-2 text-base text-left' style={{color:"#4D4C7D"}}>Region : {region}</div>
            
        </InteractiveCard>
    );
}