import React from 'react'

export default function Hero () {
    return (
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
            <img
                className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                alt="Background Image"
                src="src/app/Components/BG.png" />
        </div>
    )
}
