import { IContactData } from "@/types";
import React from "react";
import toast from "react-hot-toast";

export const createContact = async (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    contactData: IContactData,
    setContactData: React.Dispatch<React.SetStateAction<IContactData>>
) => {
    try {
        setLoading(true)
        const response = await fetch("", {
            method: "POST",
            body: { ...contactData } as any,
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log(response)
        setContactData({
            email: "",
            message: "",
            names: "",
            telephone: ""
        })
        toast.success("Message sent successfully")
    } catch (error) {
        toast.error("Error occured")
    } finally {
        setLoading(false)
    }
}