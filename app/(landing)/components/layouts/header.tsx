import Image from "next/image"
import Link from "next/link";
import { FiShoppingBag, FiSearch } from "react-icons/fi"

export const Header = () => {
    return (
        <header className="fixed top-0 inset-x-0 backdrop-blur-sm z-50">
            <div className="container mx-auto flex justify-between gap-10 py-7">
                <Image 
                src="/images/logo.svg" 
                alt="Sporton Logo" 
                width={127} 
                height={30} 
                />
                <nav className="flex gap-23 font-medium">
                    <Link href="#hero-section" className="relative after:block after:bg-primary after:rounded-full after:h-0.75 after:w-2/3 after:absolute after:inset-x-0 after:mx-auto after:translate-y-1">Home</Link>
                    <Link href="#category-section">Category</Link>
                    <Link href="#products-section">Explore Products</Link>
                </nav>
                <div className="flex gap-10">
                    <FiSearch size={24}/>
                    <div className="relative">
                        <FiShoppingBag  size={24}/>
                        <div className="absolute -top-1 -right-1 bg-primary rounded-full size-3.5 text-[10px] text-white text-center">
                            3
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}