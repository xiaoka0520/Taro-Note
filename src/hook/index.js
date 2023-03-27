import { useEffect,useState,useRef } from "react";

function useCallBackState(state){
    const cbref=useRef()
    const [data,setData]=useState[state]

    useEffect(()=>{
        cbref.current&& cbref.current(data)
    },[data])

    return [data,(val,callback)=>{
        cbref.current=callback
        setData(val)
    }]
}

export {useCallBackState}