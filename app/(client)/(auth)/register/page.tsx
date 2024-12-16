import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <p>Home  ›  Register</p>
            <h1 className='text-3xl font-semibold my-8'>Customer Register</h1>
            <div className='flex justify-center gap-8 min-w-full mb-8'>
                <div className='bg-blue-50 p-8 rounded-md w-1/3'>
                    <h3 className='font-semibold text-xl'>Registered Customers</h3>
                    <p className='text-sm my-4'>If you don't have an account, register now ?</p>
                    <form action="">
                        <div className='flex flex-col w-full pb-4'>
                            <label htmlFor="forName" >Your Name</label>
                            <input className='border px-4 py-2 rounded-md ' type="text" placeholder='Your Name' required />
                        </div>
                        <div className='flex flex-col w-full pb-4'>
                            <label htmlFor="forName" >Your Email</label>
                            <input className='border px-4 py-2 rounded-md ' type="email" placeholder='Your Email' required />
                        </div>
                        <div className='flex flex-col w-full pb-4'>
                            <label htmlFor="forEmail">Your Password</label>
                            <input className='border px-4 py-2 rounded-md' type="password" placeholder='Your Password' required />
                        </div>
                        <div className='flex flex-col w-full pb-4'>
                            <label htmlFor="forEmail">Confirm password</label>
                            <input className='border px-4 py-2 rounded-md' type="password" placeholder='Your Password' required />
                        </div>

                        <div className='flex gap-8 my-4 items-center'>
                            <button className='px-8 py-2 border-2 font-semibold rounded-full text-white bg-blue-600 border-blue-600 hover:bg-white hover:text-blue-600 transition' type="submit">Register</button>
                            <span className='text-gray-500'>If you have an account,
                                <Link href="/login" className='text-sm font-semibold  text-blue-500 hover:underline pl-2'>
                                    Sign in now ?
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
                <div className='bg-blue-50 p-8 rounded-md w-1/3'>
                    <h3 className='font-semibold text-xl'>New Customer?</h3>
                    <p className='text-sm my-4'>Creating an account has many benefits: </p>
                    <ul className='text-sm text-gray-500'>
                        <li>•  Check out faster</li>
                        <li>•  Keep more than one address</li>
                        <li>•  Track orders and more</li>
                    </ul>
                    <Link href="/register">
                        <button className='my-8 px-8 py-2 border-2 font-semibold rounded-full text-white bg-blue-600 border-blue-600 hover:bg-white hover:text-blue-600 transition' type="submit">Create An Account</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default page
