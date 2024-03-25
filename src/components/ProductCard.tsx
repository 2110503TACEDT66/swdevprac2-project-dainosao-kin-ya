'use client'
import Image from "next/image";
import styles from "./card.module.css"
import InteractiveCard from './InteractiveCard'
import { Rating } from "@mui/material";
import React,{useState} from "react";

export default function ProductCard({carName, imgSrc, onCompare}:{carName:string, imgSrc:string, onCompare?:Function}){
    // function onCarSelect(){
    //     alert("You Select " + carName)
    // }

    const heartImg = ['/img/heart.png','/img/heart_switched.png']
    const [heartState,setHeart] = useState(0);

    return (
        <InteractiveCard contentName={carName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <div className="absolute right-0 mr-3 z-10 mt-2">
                    <Image src={heartImg[heartState%2]} alt="unlighted heart" width={30} height={30} 
                    onClick={(e)=>{setHeart(heartState+1);e.preventDefault()}}/>
                </div>
                <Image src={imgSrc}
                alt = 'Hotel Picture'
                fill={true}
                className="object-cover rounded-t-lg"/>
            </div>
            <div className='w-full h-[15%] p-[10px] text-xl text-left underline font-medium' style={{color:"#4D4C7D"}}>
                {carName}
            </div>
            <div className='w-full h-[15%] p-[10px] text-base text-left' style={{color:"#4D4C7D"}}>region : {}</div>
            
        </InteractiveCard>
    );
}