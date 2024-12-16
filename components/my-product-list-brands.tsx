import React from 'react'
import MyProductList from './my-product-list'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const MyProductListBrands = () => {
    return (
        <div className='mt-20 '>
            <div className='flex  mx-2 items-center border-b border-primary justify-between mb-2'>
                <ul className="flex flex-wrap gap-x-1 text-gray-400 font-semibold text-sm md:text-xl">
                    <li className='bg-primary cursor-pointer transition-all duration-300 text-white px-4 py-1'>
                        ASUS
                    </li>
                    <li className='hover:bg-primary cursor-pointer transition-all duration-300 hover:text-white px-4 py-1'>
                        MSI
                    </li>
                    <li className='hover:bg-primary cursor-pointer transition-all duration-300 hover:text-white px-4 py-1'>
                        DELL
                    </li>
                </ul>
                <Link href='/products'>
                    <p className='text-md text-primary transition-all duration-300 underline-offset-2 hover:translate-x-2 hover:underline flex gap-2 items-center'>
                        See More <ChevronRight size={24} />
                    </p>
                </Link>
            </div>
            <MyProductList />
        </div>
    )
}

export default MyProductListBrands
