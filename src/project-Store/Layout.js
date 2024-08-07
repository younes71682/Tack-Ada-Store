import React from 'react'
import Navbar from './components/Navbar'

const Layout = ({ children }) => {
    return (
        <div className='flex justify-center bg-green-500 m-20 '>
            <div className='flex flex-col w-[500px]'>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default Layout
