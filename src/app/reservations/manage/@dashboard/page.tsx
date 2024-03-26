import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"
import Car from "@/db/models/Car"
import { dbConnect } from "@/db/dbConnect"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export default async function DashboardPage(){

    const addCar = async (addCarForm:FormData) => {
        "use server"
        const model = addCarForm.get("model")
        const description = addCarForm.get("desc")
        const picture = addCarForm.get("picture")
        const seats = addCarForm.get("seats")
        const doors = addCarForm.get("doors")
        const largebags = addCarForm.get("largebags")
        const smallbags = addCarForm.get("smallbags")
        const automatic = true
        const dayRate = addCarForm.get("dayRate")

        try{
            await dbConnect()
            const car = await Car.create({
                "model": model,
                "description": description,
                "picture": picture,
                "seats":seats,
                "doors":doors,
                "largebags":largebags,
                "smallbags":smallbags,
                "automatic":automatic,
                "dayRate":dayRate
            })
        }catch(error){
            console.log(error)
        }
        revalidateTag("cars")
        redirect("/car")
    }

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt);

    return(
        <main className="m-5 p-5">
            
            {
                (profile.data.role=="admin")?
                <form action={addCar}>
                    <div className="justify-center flex flex-col">
                    <div className="text-4xl font-bold text-blue-700 text-center text-[#363062] underline">Add Hotel</div>

                    <div className="mx-auto">
                    <div className="mx-auto block items-center w-3/4 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="name">Hotel Name:</label>
                        <input type="text" required id="name" name="name" placeholder="Hotel Name"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="mx-auto block items-center w-3/4 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="Address">Address:</label>
                        <input type="text" required id="Address" name="Address" placeholder="Address"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="mx-auto flex items-center w-3/4 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="district">District:</label>
                        <input type="number" required id="district" name="district" placeholder="District"
                        className="bg-white border-2 border-gray-200 rounded w-1/2 p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
                        <label className="w-auto block text-gray-700 pr-4 ml-5" htmlFor="province">Province:</label>
                        <input type="number" required id="province" name="province" placeholder="Province"
                        className="bg-white border-2 border-gray-200 rounded w-1/2 p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="mx-auto flex items-center w-3/4 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="postal">Postal Code:</label>
                        <input type="number" required id="postal" name="postal" placeholder="Postal Code"
                        className="bg-white border-2 border-gray-200 rounded w-1/2 p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
                        <label className="w-auto block text-gray-700 pr-4 ml-5" htmlFor="tel">Telephone Number:</label>
                        <input type="number" required id="tel" name="tel" placeholder="Telephone Number"
                        className="bg-white border-2 border-gray-200 rounded w-1/2 p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    
                    <div className="mx-auto block items-center w-3/4 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="region">Region:</label>
                        <input type="text" required id="region" name="region" placeholder="Region"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="mx-auto block items-center w-3/4 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="name">Picture URI:</label>
                        <input type="text" required id="picture" name="picture" placeholder="Picture URI"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <button type="submit" className="mx-auto block bg-[#F99417] text-white border-2 border-[#F99417] p-2 rounded w-[75%] hover:bg-white hover:text-[#F99417]">Add New Hotel</button>
                    </div>

                    </div>
                </form>
                : null
            }
        </main>
    )
}