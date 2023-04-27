import { useState } from "react";
import { useLocation } from "react-router-dom";

export const useUsPage = (props) => {


    const [location, setLocation] = useState()

    let locatiosn = useLocation()

    const nameLocation = () => {

        //nombre path
        let pathName = locatiosn.pathname

        //nombre sin /
        const name = pathName.slice(1)

        return pathName
    }


    return {
        nameLocation,
        location,
        setLocation
    }
}