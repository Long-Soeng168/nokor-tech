import Footer from '@/components/footer/footer';
import MyFooter from '@/components/my-footer';
import MyHeader from '@/components/my-header'; 
import React from 'react'

interface ChildrenType {
    children: React.ReactNode
}

const ClientLayout: React.FC<ChildrenType> = ({ children }) => {
    return (
        <>
            <MyHeader />
            <main>
                {children}
            </main> 
            {/* <Footer /> */}
            <MyFooter />
        </>
    )
}

export default ClientLayout
