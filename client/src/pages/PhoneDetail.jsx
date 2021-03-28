import {React, useEffect} from 'react'

export default function PhoneDetail(props) {
    useEffect(() => {
        let phoneId = props.match.params.phoneId
        
    }, [])

    return (
        <div>
            Phone Detail
        </div>
    )
}
