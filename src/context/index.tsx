import { createContext, useState } from "react";

export const CommonContext = createContext<any>({})

export const CommonProvider = ({ children }: any) => {

    const [showNavbar, setShowNavbar] = useState(false)

    return (
        <CommonContext.Provider value={{
            showNavbar,
            setShowNavbar
        }}>
                {children}
        </CommonContext.Provider>
    )
}