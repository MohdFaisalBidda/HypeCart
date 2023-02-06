import React from 'react'

const HomeItem = ({ description, url }) => {
    return (

            <div className="w-[155rem] max-h-full bg-white flex justify-between items-center flex-col md:flex-row md:px-40">
                <img src={url} alt="" className='md:h-[400px] h-[200px] mr-16 object-contain rounded-lg shadow-[10px_10px_black]' />
                <h1 className='text-5xl break-words  w-4/5 mt-20 text-center'>{description}</h1>
            </div>

    )
}

export default HomeItem
