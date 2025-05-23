import React from 'react'
import { useNavigate } from 'react-router'

const NotFound = () => {

    const navigation = useNavigate()

    return (
        <div>
            <span>Not Found</span>
            <button onClick={() => navigation(-1)}>Go back</button>
        </div>
    )
}

export default NotFound