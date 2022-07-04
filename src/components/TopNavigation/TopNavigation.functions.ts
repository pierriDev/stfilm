import { useState, useEffect } from "react";

export const useTopNavigation = (isHome: boolean) => {
    const [backgroundColor, setBackgroundColor] = useState('transparent')
    const [firstTextColor, setFirstTextColor] = useState("white")
    const [secondTextColor, setSecondTextColor] = useState("white")
    const [thirdTextColor, setThirdTextColor] = useState("white")
    const [fourthTextColor, setFourthTextColor] = useState("white")
    const [fifthTextColor, setFifthTextColor] = useState("white")

    const [firstHover, setFirstHover] = useState(false)
    const [secondHover, setSecondHover] = useState(false)
    const [thirdHover, setThirdHover] = useState(false)
    const [fourthHover, setFourthHover] = useState(false)
    const [fifthHover, setFifthHover] = useState(false)

    const [isLogoFull, setIsLogoFull] = useState(false)

    useEffect(()=> {
        window.addEventListener('scroll', listenScrollEvent)
    })

    useEffect(()=> {
        if(!isHome){
            setFirstTextColor("black")
            setSecondTextColor("black")
            setThirdTextColor("black")
            setFourthTextColor("black")
            setFifthTextColor("black")
            setIsLogoFull(true)
        }
    },[isHome])

    
    const listenScrollEvent = (e: any) => {
        if (window.scrollY > 10) {
            setBackgroundColor("white")
            setFirstTextColor("black")
            setSecondTextColor("black")
            setThirdTextColor("black")
            setFourthTextColor("black")
            setFifthTextColor("black")
            setIsLogoFull(true)
        } else {
            if(isHome){
                setBackgroundColor("transparent")
                setFirstTextColor("white")
                setSecondTextColor("white")
                setThirdTextColor("white")
                setFourthTextColor("white")
                setFifthTextColor("white")
                setIsLogoFull(false)
            }else{
                setBackgroundColor("transparent")
                setFirstTextColor("black")
                setSecondTextColor("black")
                setThirdTextColor("black")
                setFourthTextColor("black")
                setFifthTextColor("black")
                setIsLogoFull(true)
            }
        }
    }

    useEffect(()=> {
        if(firstHover === true){
            setFirstTextColor("#FAA61C")
        }else{
            if (window.scrollY > 10) {
                setFirstTextColor("black")
            } else {
                isHome ?
                    setFirstTextColor("white")
                :
                    setFirstTextColor("black")

            }
        }
    },[firstHover])

    useEffect(()=> {
        if(secondHover === true){
            setSecondTextColor("#FAA61C")
        }else{
            if (window.scrollY > 10) {
                setSecondTextColor("black")
            } else {
                isHome ?
                    setSecondTextColor("white")
                :
                    setSecondTextColor("black")
            }
        }
    },[secondHover])

    useEffect(()=> {
        if(thirdHover === true){
            setThirdTextColor("#FAA61C")
        }else{
            if (window.scrollY > 10) {
                setThirdTextColor("black")
            } else {
                isHome ?
                    setThirdTextColor("white")
                :
                    setThirdTextColor("black")
            }
        }
    },[thirdHover])

    useEffect(()=> {
        if(fourthHover === true){
            setFourthTextColor("#FAA61C")
        }else{
            if (window.scrollY > 10) {
                setFourthTextColor("black")
            } else {
                isHome ?
                    setFourthTextColor("white")
                :
                    setFourthTextColor("black")
            }
        }
    },[fourthHover])

    useEffect(()=> {
        if(fifthHover === true){
            setFifthTextColor("#FAA61C")
        }else{
            if (window.scrollY > 10) {
                setFifthTextColor("black")
            } else {
                isHome ?
                    setFifthTextColor("white")
                :
                    setFifthTextColor("black")
            }
        }
    },[fifthHover])

    const toogleFirstHover = () => {
        setFirstHover(!firstHover)
    }

    const toogleSecondHover = () => {
        setSecondHover(!secondHover)
    }
    
    const toogleThirdHover = () => {
        setThirdHover(!thirdHover)
        
    }

    const toogleFourthHover = () => {
        setFourthHover(!fourthHover)
    }

    const toogleFifthHover = () => {
        setFifthHover(!fifthHover)
    }

   

    return {
        backgroundColor,
        firstTextColor,
        secondTextColor,
        thirdTextColor,
        fourthTextColor,
        fifthTextColor,
        toogleFirstHover,
        toogleSecondHover,
        toogleThirdHover,
        toogleFourthHover,
        toogleFifthHover,
        isLogoFull
    }
}