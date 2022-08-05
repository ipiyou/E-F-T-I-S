import { useEffect, useRef, useState } from "react"

function useScroll(){
    const [Scroll,setScroll] = useState<number>()
    const ref = useRef();
    useEffect(() =>{
        const scrollWrapper = ref.current;
    })
    return [Scroll,ref]
}

export default useScroll