import Footer from '@/components/footer/footer';
import MyHeader from '@/components/my-header';
import MyService from '@/components/my-service';
import React from 'react'

const ClientLayout = (
    {
        children
    }
        :
        {
            children: React.ReactNode;
        }
) => {
    return (
        <>
            <main className=''>
                {children}
            </main>
        </>
    )
}

export default ClientLayout
