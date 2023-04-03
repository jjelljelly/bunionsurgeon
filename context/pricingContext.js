import { useState, useEffect, useContext, createContext } from "react";

export const PricingContext = createContext()

export function PricingProvider({ children }) {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_GET_QUOTE)
            .then((response) => response.json())
            .then((res) => setData(res));
    }, []);

    return <PricingContext.Provider value={data}>
        {children}
    </PricingContext.Provider>
}

export function usePricingContext() {
    return useContext(PricingContext)
}