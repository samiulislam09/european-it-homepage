import { useEffect, useState } from "react"

const useFacilities = () => {
    const [facilities, setFacilities] = useState([])
    useEffect(() => {
        fetch('facilities.json')
            .then(res => res.json())
            .then(data => setFacilities(data))
    }, [])
    return [facilities, setFacilities]
}
export default useFacilities;