export default async function userRegister(userName:string, userEmail:string, userTel:string, userPassword:string) {
    const response = await fetch("http://localhost:5000/api/v1/auth/register",{
        method : "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            tel: userTel,
            email: userEmail,
            role:'user',
            password: userPassword,
        }),
    })

    if(!response.ok){
        throw new Error("Failed to register")
    }
    return await response.json()
}