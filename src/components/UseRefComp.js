import { useEffect, useRef } from "react";
import RefInput from "./RefInput";

export default function useRefComp() {
    const inputref = useRef(null);
    useEffect(() => {
        inputref.current.focus();
    }, []);
    return(

            <RefInput ref={inputref} type="text" placeholder="Place name" />

    )
}
