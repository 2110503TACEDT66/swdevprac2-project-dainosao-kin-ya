import Image from "next/image"
import getHospital from "@/libs/getHospital";
export default async function HospitalDetailPage({params}:{params:{hid:string}}){

    const hosDetail = await getHospital(params.hid)

    return(
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">{hosDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image src={hosDetail.data.picture} alt='Hospital Image' width={0} height={0}
                sizes='100vw' className="rounded-lg w-[30%] bg-black"/>
                <div className="text-md mx-5 text-left">{hosDetail.data.name}
                <div> Address: {hosDetail.data.address} {hosDetail.data.district} {hosDetail.data.province} {hosDetail.data.postalcode}</div>
                <div> Telephone: {hosDetail.data.tel}</div>
                </div>
            </div>
        </main>
    );
}