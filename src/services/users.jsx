import { api } from "../api"

export  const Createuser=async(newuser)=>{
    const res=await api.post("/users",newuser)
    if(!res.data){
        throw new Error("no found")
    }
    return res.data

}


export const fetchusers=async()=>{
    const res=await api.get("/users")
    if(!res.data){
        throw new Error("no found")
    }
    return res.data



}