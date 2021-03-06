import React from 'react'
import Loader from 'react-loader-spinner'

export const Loading = () => {
    return (
        <div className='flex justify-center istems-center'>
            <Loader type='Puff' color="#00BFFf" height={550} width={80}/>
        </div>
    )
}
