import { useState, useEffect } from "react";

export const useTopNavigation = () => {
    const [backgroundColor, setBackgroundColor] = useState('transparent')
    const [firstTextColor, setFirstTextColor] = useState('white')
    const [secondTextColor, setSecondTextColor] = useState('white')
    const [thirdTextColor, setThirdTextColor] = useState('white')
    const [fourthTextColor, setFourthTextColor] = useState('white')
    const [fifthTextColor, setFifthTextColor] = useState('white')

    const [firstHover, setFirstHover] = useState(false)
    const [secondHover, setSecondHover] = useState(false)
    const [thirdHover, setThirdHover] = useState(false)
    const [fourthHover, setFourthHover] = useState(false)
    const [fifthHover, setFifthHover] = useState(false)

    useEffect(()=> {
        window.addEventListener('scroll', listenScrollEvent)
    })

    const listenScrollEvent = (e: any) => {
        if (window.scrollY > 10) {
            setBackgroundColor("white")
            setFirstTextColor("black")
            setSecondTextColor("black")
            setThirdTextColor("black")
            setFourthTextColor("black")
            setFifthTextColor("black")
        } else {
            setBackgroundColor("transparent")
            setFirstTextColor("white")
            setSecondTextColor("white")
            setThirdTextColor("white")
            setFourthTextColor("white")
            setFifthTextColor("white")
        }
    }

    useEffect(()=> {
        if(firstHover === true){
            setFirstTextColor("#FAA61C")
        }else{
            if (window.scrollY > 10) {
                setFirstTextColor("black")
            } else {
                setFirstTextColor("white")
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
                setSecondTextColor("white")
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
                setThirdTextColor("white")
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
                setFourthTextColor("white")
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
                setFifthTextColor("white")
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
    }
}