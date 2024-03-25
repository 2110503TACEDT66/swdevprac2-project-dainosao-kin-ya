import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interfaces";

type ReserveState = {
    reserveItems: ReservationItem[]
}

const initialState:ReserveState = {reserveItems:[]}

export const reserveSlice = createSlice({
    name: "reserve",
    initialState,
    reducers: {
        addReservation: (state, action:PayloadAction<ReservationItem>)=>{
            //console.log('addReservation')
            //console.log(state.carItems)
            //console.log(action.payload)
            state.reserveItems.push(action.payload)
        },
        removeReservation: (state, action:PayloadAction<ReservationItem>)=>{
            const remainItems = state.reserveItems.filter(obj => {
                return ((obj.hotelId != action.payload.hotelId)
                || (obj.nightNum != action.payload.nightNum)
                || (obj.revDate != action.payload.revDate))
            })
            state.reserveItems = remainItems
        }
    }
})

export const { addReservation, removeReservation } = reserveSlice.actions
export default reserveSlice.reducer