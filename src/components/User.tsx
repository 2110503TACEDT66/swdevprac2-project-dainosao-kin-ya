import Link from "next/link"
export default function User() {
    return (
        <div className="absolute h-full w-1/5">
            <div className="h-[20%] bg-white-200 text-center">
                <div className="underline text-[#F99417]">User's datails</div>
                <div className="text-3xl text-[#363062]">User Name</div>
            </div>
            <div className="h-[75%] bg-[#363062]">
                <div className="my-5">Name: User Name</div>
                <div className="my-5">Tel: 0987654321</div>
                <div className="my-5">Email: Plhormak@gmail.com</div>
                <div className="my-5">Member Since: 1/1/2005</div>
                <div className="absolute bottom-[10%] w-full flex justify-center"> 
                    <Link href="/api/auth/signout">
                        <button className="text-xl italic text-center bg-[#F99417] rounded-lg px-10 py-2">Sign-Out</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
