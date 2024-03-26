export default async function getReservation(token: string) {
    const response = await fetch ("http://localhost:5000/api/v1/reservations",{
        next: {tags: ['reservations']},
        method: "GET",
        headers: {
            authorization : `Bearer ${token}`
        }
    })
    
    if(!response.ok){
        console.log(response.json)
        throw new Error("Failed to get reservation")
    }
    return await response.json()
}