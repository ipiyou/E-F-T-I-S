import { useState } from "react"

function useRecent(){
    const local = localStorage.getItem("recent") ? localStorage.getItem('recent') : ''
    const [recent,setRecent] = useState<String | null>(local);
    const AddRecent = (str: string) =>{
        setRecent(recent + '($31)'+str)
        localStorage.setItem("recent",recent + '($31)'+str)
    }
    const DelRecent = () =>{
        let RECENT = recent ? recent.split("($31)") : []
        RECENT.unshift()
        setRecent(RECENT.join("($31)"))
    }
    return{
        recent,
        AddRecent,
        DelRecent,
    }
}

export default useRecent