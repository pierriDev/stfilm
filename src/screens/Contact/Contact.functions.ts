import { useState } from "react"
import { useSetContact } from "../../api/contact/hooks"

export const useContactScreen = () => {
    const [name, setName] = useState("")
    const [company, setCompany] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [isLoading, setLoading] = useState(false)
    const [showReturn, setShowReturn] = useState(false)
    const [returnType, setReturnType] = useState("success")
    const [returnMessage, setReturnMessage] = useState("")
    const mutator = useSetContact();

    const onInputChange = (event: any) => {
        if(event.target.name == "name"){
            setName(event.target.value)
        }else if(event.target.name == "company"){
            setCompany(event.target.value)
        }else if(event.target.name == "phone"){
            setPhone(event.target.value)
        }else if(event.target.name == "message"){
            setMessage(event.target.value)
        }
    }

    const submit = async () => {
        setLoading(true);
        if(name && company && phone && message){
            const result = await mutator.mutateAsync({
                name,
                company,
                phone,
                message
            })
            if(result.status === 400){
                setShowReturn(true);
                setReturnType("error")
                setReturnMessage(result.message)
            }else if(result.status === 200){
                setShowReturn(true);
                setReturnMessage(result.message)
                setReturnType("success")
                console.log("200");
            }
        }else{
            setShowReturn(true);
            setReturnType("error")
            setReturnMessage("Por favor, preecha todos os campos")
        }
        setLoading(false);
    }

    const closeAlert = () => {
        setShowReturn(false);
        setReturnMessage("")
        setReturnType("success")
    }

    return{
        name,
        company,
        phone,
        message,
        onInputChange,
        isLoading,
        showReturn,
        returnType,
        returnMessage,
        submit,
        closeAlert
    }
}
