'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
    const path = usePathname();
    console.log(path);

    return (
            <nav 
                className="flex-shrink-0 bg-gray-300 h-full px-2 py-6 flex flex-col justify-between items-center min-w-16 lg:w-60"
            >
                
                
                <div>
                    <Image src="/logo.jpeg" width={60} height={60} alt="logo" 
                    className="rounded-full"/>
                </div>

                <ul
                    className="flex flex-col gap-6 items-center md:items-baseline" 
                >
                    <Link href="/">
                        <li
                            className={cn("flex items-center gap-2 p-2 rounded-full md:w-full", path == "/" ? "bg-gray-500" : "")}
                        >
                            <Image src="/home.svg" width={30} height={30} alt="home icon" 
                                className={`${path == "/" ? "brightness-0 invert" : ""}`}
                            />
                            <p
                                className={cn("text-xl font-semibold hidden lg:flex", path == "/" ? "text-white" : "")}
                            >Dashboard</p>
                        </li>
                    </Link>


                    <Link href="/products">
                        <li
                            className={cn("flex items-center gap-2 p-2 rounded-full md:w-full", path == "/products" ? "bg-gray-500" : "")}
                        >
                            <Image src="/products.svg" width={30} height={30} alt="home icon" 
                                className={`${path == "/products" ? "brightness-0 invert" : ""}`}
                            />
                            <p
                                className={cn("text-xl font-semibold hidden lg:flex", path == "/products" ? "text-white" : "")}
                            >Products</p>
                        </li>
                    </Link>


                    <Link href="/social">
                        <li
                            className={cn("flex items-center gap-2 p-2 rounded-full md:w-full", path == "/social" ? "bg-gray-500" : "")}
                        >
                            <Image src="/social.svg" width={30} height={30} alt="home icon" 
                                className={`${path == "/social" ? "brightness-0 invert" : ""}`}
                            />
                            <p
                                className={cn("text-xl font-semibold hidden lg:flex", path == "/social" ? "text-white" : "")}
                            >Social Media</p>
                        </li>
                    </Link>
                </ul>

                <ul 
                    className="flex flex-col gap-6"
                >
                    <Link href="https://www.instagram.com/garimpo_style_/">
                        <li>
                            <Image src="insta.svg" width={20} height={20} alt='insta logo' />
                        </li>
                    </Link>

                    <Link href="https://www.tiktok.com/@garimpostyle_">
                        <li>
                            <Image src="tiktok.svg" width={20} height={20} alt='tiktok logo' />
                        </li>
                    </Link>
                </ul>
            </nav>
    )
}

export default Header