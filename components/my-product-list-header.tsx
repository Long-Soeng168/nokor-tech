import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const MyProductListHeader = ({ title }: { title: string }) => {
    return (
        <div className='flex justify-between items-center border-b border-primary pt-8 mx-2 mb-2'>
            <p className='text-lg text-white font-bold rounded-tl-full rounded-br-full bg-primary px-8 py-1'>
                {title}
            </p>
            <Link href='/products'>
                <p className='text-md text-primary transition-all duration-300 underline-offset-2 hover:translate-x-2 hover:underline flex gap-2 items-center'>
                    See More <ChevronRight size={24} />
                </p>
            </Link>
        </div>
    )
}

export default MyProductListHeader
