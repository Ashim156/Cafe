import React from 'react'
import Header from './header'
import Footer from './Footer'
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className='overflow-hidden'>
                {children}
            </main>
            <Footer />

        </>
    )
}

export default Layout