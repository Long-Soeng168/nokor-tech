"use client"
import React, { useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import BrandLogos from '@/components/BrandLogosProps ';
import Image from 'next/image';
import MyProductCard from '@/components/ui/my-product-card';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { AlignLeft, Laptop, MonitorSpeaker, Router } from 'lucide-react'
import { MyBrandsFilter } from '@/components/my-brands-filter'

const products = [
    {
        id: 1,
        instock: true,
        imageUrl: '/images/new-products/1.png',
        rating: 4,
        reviews: 4,
        name: 'EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One...',
        price: 499.00,
        oldPrice: 599.00,
    },
    {
        id: 2,
        instock: true,
        imageUrl: '/images/new-products/2.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 3,
        instock: false,
        imageUrl: '/images/new-products/3.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 4,
        instock: true,
        imageUrl: '/images/new-products/4.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 5,
        instock: false,
        imageUrl: '/images/new-products/5.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 6,
        instock: true,
        imageUrl: '/images/new-products/6.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 7,
        instock: true,
        imageUrl: '/images/new-products/7.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 8,
        instock: false,
        imageUrl: '/images/new-products/8.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 9,
        instock: false,
        imageUrl: '/images/new-products/9.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 10,
        instock: false,
        imageUrl: '/images/new-products/10.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    {
        id: 11,
        instock: false,
        imageUrl: '/images/new-products/1.png',
        rating: 3,
        reviews: 8,
        name: 'Gaming Laptop MSI Raider GE76',
        price: 1299.00,
    },
    // Add more product objects here
];






const Page = () => {

    return (
        <div className='max-w-screen-xl mx-auto mb-8'>
            <div className='flex mr-2'>
                {/* start left side */}
                <div className='w-64 hidden lg:block'>
                    <div className=' bg-indigo-50 px-2 pt-4'>
                        <div className='flex flex-col items-center'>
                            <h3 className='font-semibold text-xl mb-4'>Filters</h3>
                        </div>
                        <div>
                            <p className='font-semibold text-sm text-primary flex items-center gap-1 '><AlignLeft size={18} /> Categories</p>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <div className='flex w-full justify-between items-center text-base'>
                                        <span className='hover:text-primary hover:underline cursor-pointer w-full flex-1 p-1 flex items-center gap-1'><Laptop />Laptop</span>
                                        <AccordionTrigger className='h-full p-2 hover:bg-primary hover:text-white'></AccordionTrigger>
                                    </div>
                                    <AccordionContent>
                                        <ul className='ml-4 pl-4 border-l-2 border-primary text-sm'>
                                            <li className='cursor-pointer hover:underline'>Notebook</li>
                                            <li className='cursor-pointer hover:underline'>Gaming & Design</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <div className='flex w-full justify-between items-center text-base'>
                                        <span className='hover:text-primary hover:underline cursor-pointer w-full flex-1 p-1 flex items-center gap-1'><MonitorSpeaker />Desktop</span>
                                        <AccordionTrigger className='h-full p-2 hover:bg-primary hover:text-white'></AccordionTrigger>
                                    </div>
                                    <AccordionContent>
                                        <ul className='ml-4 pl-4 border-l-2 border-primary text-sm'>
                                            <li className='cursor-pointer hover:underline'>All in One PC</li>
                                            <li className='cursor-pointer hover:underline'>Custom PC</li>
                                            <li className='cursor-pointer hover:underline'>Used Desktop</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <div className='flex w-full justify-between items-center text-base'>
                                        <span className='hover:text-primary hover:underline cursor-pointer w-full flex-1 p-1 flex items-center gap-1'>
                                            <Router />Network Device
                                        </span>
                                        <AccordionTrigger className='h-full p-2 hover:bg-primary hover:text-white'></AccordionTrigger>
                                    </div>
                                    <AccordionContent>
                                        <ul className='ml-4 pl-4 border-l-2 border-primary text-sm'>
                                            <li className='cursor-pointer hover:underline'>Router</li>
                                            <li className='cursor-pointer hover:underline'>Switch</li>
                                            <li className='cursor-pointer hover:underline'>Network Cable</li>
                                            <li className='cursor-pointer hover:underline'>Network Connector</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        {/* end category  */}

                        <div className='mt-8'>
                            <p className='font-semibold text-sm text-primary flex items-center gap-1 mb-2'><AlignLeft size={18} /> Brands</p>
                            <MyBrandsFilter />
                        </div>

                        <Button className=' w-full my-8'>Apply Filter</Button>

                        {/* end filter name */}
                    </div>
                    {/* end brand */}
                    <div className='mt-8 w-full space-y-2'>
                        <Image
                            src={"/images/banners/banner2.png"}
                            alt=''
                            width={600}
                            height={600}
                        />
                        <Image
                            src={"/images/banners/banner3.png"}
                            alt=''
                            width={600}
                            height={600}
                        />

                    </div>

                </div>
                {/* end left side */}

                {/* start right side */}
                {/* start fillter products section */}
                <div className='flex-1'>
                    <div className='flex justify-end md:justify-between items-center  mb-4 gap-4 px-2'>
                        <Input className='flex-1 border-primary hidden md:block rounded-full focus:border-primary focus:border-1' placeholder='Search Products...' />
                        <div className='flex gap-4 items-center'>
                            <Select>
                                <SelectTrigger className="w-auto rounded-full">
                                    <SelectValue placeholder="Sort By : " />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Title</SelectItem>
                                    <SelectItem value="dark">Price</SelectItem>
                                    <SelectItem value="system">Post Date</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-auto rounded-full">
                                    <SelectValue placeholder="Per Page : " />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="10">10 Per Page</SelectItem>
                                    <SelectItem value="20">20 Per Page</SelectItem>
                                    <SelectItem value="30">30 Per Page</SelectItem>
                                    <SelectItem value="40">40 Per Page</SelectItem>
                                    <SelectItem value="50">50 Per Page</SelectItem>
                                    <SelectItem value="60">100 Per Page</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    {/* end fillter products section */}
                    <div className='flex-1 pl-4'>
                        {/* start list products */}
                        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                            {products.map((product) => (
                                <MyProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                        {/* end list products */}
                        {/* start pagination */}
                        <div className='flex justify-center my-16'>
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious href="#" />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#" isActive>
                                            2
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href="#" />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                        {/* end pagination */}
                    </div>
                    {/* end right side */}
                </div>
            </div>

            {/* end list products */}


        </div>
    )
}

export default Page
