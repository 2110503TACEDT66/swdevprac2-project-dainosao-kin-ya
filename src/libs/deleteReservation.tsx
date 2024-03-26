import { ReservationItem } from "interfaces"

export default async function deleteReservation(token: string, reserveId : string) {
    const response = await fetch(`http://localhost:5000/api/v1/reservations/${reserveId}`,{
        method : "DELETE",
        headers: {
            authorization : `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })

    if(!response.ok){
        console.log(response.status)
        throw new Error("Failed to delete reservation")
    }
    return await response.json()
}