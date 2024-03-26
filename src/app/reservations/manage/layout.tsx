import React from "react";

export default function ManageReservationLayout ({children, dashboard, manage} : {children:React.ReactNode, dashboard:React.ReactNode, manage:React.ReactNode}){
    return(
        <div className="flex flex-col w-full bg-[#f5f5f5]">
            {children}
            {dashboard}
            {manage}
        </div>
    )
}