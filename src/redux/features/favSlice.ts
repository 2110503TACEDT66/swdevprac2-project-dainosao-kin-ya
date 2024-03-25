import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FavState = {
    // favItems: string[]
    favItems: Map<string,boolean>
}

// const initialState:FavState = {favItems: []}
const initialState:FavState = {favItems: new Map}

export const favSlice = createSlice({
    name: "fav",
    initialState,
    reducers: {
        checkFav: (state, action:PayloadAction<{name:string, fav:boolean}>)=>{
            // if(action.payload.fav){
            //     state.favItems.push(action.payload.name);
            // }
            // else{
            //     const remainItems = state.favItems.filter(obj => {
            //         return (obj != action.payload.name)
            //     })
            //     state.favItems = remainItems
            // }
            // if(state.favItems.find((name) => name === action.payload.name)){
            if(state.favItems.has(action.payload.name)){
                if(!action.payload.fav){
                    state.favItems.delete(action.payload.name)
                }
            }
            else{
                if(action.payload.fav){
                    state.favItems.set(action.payload.name, action.payload.fav)
                }
            }
        }
    }
})

export const { checkFav } = favSlice.actions
export default favSlice.reducer