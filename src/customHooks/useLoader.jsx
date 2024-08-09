import { useEffect, useState } from "react";

export default function useLoader(loaderStatus) {

    const [loader, setLoader] = useState(null)

    const loaderTemplate = () => {
        return (
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-400/50 z-10 w-full h-full flex content-center justify-center'>
                <span className="bg-red loading loading-infinity loading-lg"></span>
            </div>
        )
    }

    const showLoader = (isLoading) => {
        if (isLoading) {
            return setLoader(loaderTemplate())
        }
        return setLoader(null)
    }

    useEffect(() => {
        showLoader(loaderStatus)
    }, [loaderStatus])

    return { loader }
}