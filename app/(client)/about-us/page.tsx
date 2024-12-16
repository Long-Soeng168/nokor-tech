import { Heart, Star, Truck } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const AboutUsPage = () => {
    return (
        <div>
            <div className="bg-primary text-white">
                <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-24 py-16">
                    <div className="w-full lg:w-1/2 lg:pr-16">
                        <h3 className="text-4xl lg:text-5xl font-semibold mb-4">A Family That Keeps On Growing</h3>
                        <div className="text-lg lg:text-xl text-gray-200">
                            <p className="mb-4">
                                We always aim to please the home market, supplying great computers and hardware at great
                                prices to non-corporate customers, through our large Melbourne CBD showroom and our online
                                store.
                            </p>
                            <p>
                                Shop management approach fosters a strong customer service focus in our staff. We prefer to
                                cultivate long-term client relationships rather than achieve quick sales, demonstrated in
                                the measure of our long-term success.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-auto mt-8 lg:mt-0">
                        <Image
                            src="/images/products/about-us/1.png"
                            alt="About Us"
                            width={500}
                            height={500}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white text-black">
                <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-24 py-16">
                    <div className="w-full lg:w-auto mb-8 lg:mb-0 order-1">
                        <div className="w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] relative">
                            <Image src="/images/products/about-us/2.png" alt="About Us" fill />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:order-2">
                        <div className="flex gap-4 items-center">
                            <div className="bg-blue-600 p-2 w-10 h-10 rounded-l-full rounded-t-full flex items-center justify-center">
                                <div className="w-[20px] h-[20px] relative">
                                    <Image src="/images/logo/wlogo.png" alt="Logo" fill />
                                </div>
                            </div>
                            <h3 className="text-4xl lg:text-5xl font-semibold">Shop.com</h3>
                        </div>
                        <div className="text-lg lg:text-xl text-gray-600 mt-4">
                            <p className="mb-4">
                                We always aim to please the home market, supplying great computers and hardware at great
                                prices to non-corporate customers, through our large Melbourne CBD showroom and our online
                                store.
                            </p>
                            <p>
                                Shop management approach fosters a strong customer service focus in our staff. We prefer to
                                cultivate long-term client relationships rather than achieve quick sales, demonstrated in
                                the measure of our long-term success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3 */}
            <div className="bg-primary text-white">
                <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-24 py-16">
                    <div className="w-full lg:w-1/2">
                        <div className="flex gap-4 items-center">
                            <div className="bg-blue-600 p-2 w-10 h-10 rounded-l-full rounded-t-full flex items-center justify-center">
                                <Heart />
                            </div>
                            <h3 className="text-4xl lg:text-5xl font-semibold">Now You're In Safe Hands</h3>
                        </div>
                        <div className="text-lg lg:text-xl text-gray-200 mt-4">
                            <p className="mb-4">
                                We always aim to please the home market, supplying great computers and hardware at great
                                prices to non-corporate customers, through our large Melbourne CBD showroom and our online
                                store.
                            </p>
                            <p>
                                Shop management approach fosters a strong customer service focus in our staff. We prefer to
                                cultivate long-term client relationships rather than achieve quick sales, demonstrated in
                                the measure of our long-term success.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-auto mt-8 lg:mt-0">
                        <div className="w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] relative">
                            <Image src="/images/products/about-us/3.png" alt="About Us" fill />
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional sections follow the same pattern */}
        </div>
    );
};

export default AboutUsPage;
