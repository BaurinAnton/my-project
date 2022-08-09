import { useState, useEffect } from 'react'


const getIsTablet = () => (window.innerWidth >= 768 && window.innerWidth < 992);
export const useIsTablet = () => {
    const [isTablet, setIsTablet] = useState(getIsTablet());
    useEffect(() => {
        const onResize = () => {
            setIsTablet(getIsTablet());
        }
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);
    return isTablet;
}