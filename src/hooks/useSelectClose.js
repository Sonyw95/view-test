import {useEffect, useRef, useState} from "react";

export const useSelectClose = (initState) => {

    const [isOpen, setIsOpen] = useState(initState);
    const ref= useRef(null);

    const removeHandler = e =>{
        console.log("RemoveHandler");
        setIsOpen(!isOpen);
    }
    useEffect( () => {
        const onClick = (e) =>{
            console.log("UseEffect");
            if(ref.current !== null && !ref.current.contains(e.target)){
                setIsOpen(!isOpen);
            }
        };
        if(isOpen){
            window.addEventListener("click", onClick);
        };
        return () => {
            window.removeEventListener("click", onClick);
        };
    },[isOpen]);
    return [isOpen, ref, removeHandler];

};
