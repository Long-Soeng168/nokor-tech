import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import Image from 'next/image'

interface MyMiddleSlideProps {
    images: string[];
}


const MyMiddleSlide: React.FC<MyMiddleSlideProps> = ({ images }) => {
    return (
        <Carousel className='relative px-2 mt-10'>
            <CarouselContent>
                {images.map((imageSrc, index) => (
                    <CarouselItem key={index} className='pl-2  hover:scale-95 cursor-pointer  transition-all duration-500 lg:pl-4 basis-1/2 lg:basis-1/3'>
                        <CardContent >
                            <Image
                                src={imageSrc}
                                alt=""
                                className="aspect-video w-full object-cover"
                                width={900}
                                height={500}
                                priority={index === 0}
                            />
                        </CardContent>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-4 bg-transparent text-white border-none transform -translate-y-1/2 z-10" />
            <CarouselNext className="absolute top-1/2 right-4 bg-transparent text-white border-none transform -translate-y-1/2 z-10" />
        </Carousel>
    )
}

export default MyMiddleSlide
