import { Button } from '@/components/ui/button';
import {
    Clock,
    Mail,
    MapPin,
    PhoneCall,
} from 'lucide-react';
import React from 'react';

const Page = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 mb-20">
            {/* Page Title */}
            <h1 className="text-3xl md:text-4xl font-semibold my-6">Contact Us</h1>

            {/* Content Section */}
            <div className="flex flex-wrap gap-8">
                {/* Contact Form */}
                <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-6">
                        We love hearing from you, our Shop customers. <br />
                        Please contact us, and we will make sure to get back to you as soon as we possibly can.
                    </p>

                    <form action="#" className="flex flex-wrap gap-4">
                        {/* Name and Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                            <div className="flex flex-col">
                                <label htmlFor="forName" className="mb-2 font-medium text-gray-700">Your Name</label>
                                <input
                                    id="forName"
                                    type="text"
                                    placeholder="Your Name"
                                    className="border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="forEmail" className="mb-2 font-medium text-gray-700">Your Email</label>
                                <input
                                    id="forEmail"
                                    type="email"
                                    placeholder="Your Email"
                                    className="border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col w-full">
                            <label htmlFor="forPhone" className="mb-2 font-medium text-gray-700">Your Phone</label>
                            <input
                                id="forPhone"
                                type="tel"
                                placeholder="Your Phone"
                                className="border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Thoughts */}
                        <div className="flex flex-col w-full">
                            <label htmlFor="thoughts" className="mb-2 font-medium text-gray-700">
                                What's on your mind? <span className="text-red-600">*</span>
                            </label>
                            <textarea
                                id="thoughts"
                                rows={7}
                                placeholder="Share your thoughts..."
                                className="border border-gray-300 rounded p-2 text-gray-700 focus:ring-2 focus:ring-blue-500 resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className='w-full justify-end flex'>
                            <Button>
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="flex flex-col gap-6 bg-blue-50 p-6 rounded-lg w-full md:w-1/3">
                    <div>
                        <div className="flex items-center gap-3">
                            <MapPin className="text-primary" />
                            <h2 className="text-lg font-semibold">Address:</h2>
                        </div>
                        <p className="ml-8 text-sm text-gray-600">1234 Street Address City Address, 1234</p>
                    </div>

                    <div>
                        <div className="flex items-center gap-3">
                            <PhoneCall className="text-primary" />
                            <h2 className="text-lg font-semibold">Phone:</h2>
                        </div>
                        <p className="ml-8 text-sm text-gray-600">(00) 1234 5678</p>
                    </div>

                    <div>
                        <div className="flex items-center gap-3">
                            <Clock className="text-primary" />
                            <h2 className="text-lg font-semibold">We are open:</h2>
                        </div>
                        <p className="ml-8 text-sm text-gray-600">
                            Monday - Thursday: 9:00 AM - 5:30 PM <br />
                            Friday: 9:00 AM - 6:00 PM <br />
                            Saturday: 11:00 AM - 5:00 PM
                        </p>
                    </div>

                    <div>
                        <div className="flex items-center gap-3">
                            <Mail className="text-primary" />
                            <h2 className="text-lg font-semibold">Email:</h2>
                        </div>
                        <p className="ml-8 text-sm text-primary">shop@email.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
