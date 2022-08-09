import { useState, useEffect } from 'react'


const getIsDesktop = () => (window.innerWidth >= 992);
export const useIsDesktop = () => {
    const [isDesktop, setIsDesktop] = useState(getIsDesktop());
    useEffect(() => {
        const onResize = () => {
            setIsDesktop(getIsDesktop());
        }
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);
    return isDesktop;
}