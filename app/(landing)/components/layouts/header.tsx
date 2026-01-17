'use client';
import { useState } from "react";
import Image from "next/image"
import Link from "next/link";
import { FiShoppingBag, FiSearch } from "react-icons/fi"
import CartPopup from "../ui/cart-popup";

export const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    return (
        <header className="fixed top-0 inset-x-0 backdrop-blur-sm z-50">
            <div className="container mx-auto flex justify-between gap-10 py-7">
                <Image 
                src="/images/logo.svg" 
                alt="Sporton Logo" 
                width={127} 
                height={30} 
                />
                <nav className="flex items-center gap-23 font-medium">
                    <Link href="#hero-section" className="relative after:block after:bg-primary after:rounded-full after:h-0.75 after:w-2/3 after:absolute after:inset-x-0 after:mx-auto after:translate-y-1">Home</Link>
                    <Link href="#category-section">Category</Link>
                    <Link href="#products-section">Explore Products</Link>
                </nav>
                <div className="flex items-center gap-6 relative">
                    <div className="size-12 grid place-items-center">
                        <FiSearch size={24}/>
                    </div>
                    <button
                    className="relative cursor-pointer size-12 grid place-items-center"
                    onClick={()=> setIsCartOpen(!isCartOpen)}>
                        <span className="relative">
                            <FiShoppingBag  size={24}/>
                            <div className="absolute -top-1 -right-1 bg-primary rounded-full size-3.5 text-[10px] text-white text-center">
                                3
                            </div>
                        </span>
                    </button>
                    {
                        isCartOpen && 
                        <CartPopup />
                    }
                </div>
            </div>
        </header>
    )
}