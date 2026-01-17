'use client'
import { FiArrowRight, FiChevronDown, FiChevronUp, FiShoppingBag } from "react-icons/fi";
import Button from "../ui/button";
import { useState } from "react";
const ProductActions = () => {
    const [qty, setQty] = useState(1);
    return (
        <div className="flex gap-5">
            <div className="border border-gray-500 grid grid-cols-3 shrink-0 min-w-21">
                <div className="row-span-2 col-span-2 aspect-square font-medium text-xl grid place-items-center border-r border-gray-500">
                    <span>{qty}</span>
                </div>
                <button className="col-span-1 aspect-square font-medium text-xl grid place-items-center border-b border-gray-500 cursor-pointer"
                onClick={() => setQty(qty + 1)}>
                    <FiChevronUp/>
                </button>
                <button className="col-span-1 aspect-square font-medium text-xl grid place-items-center cursor-pointer"
                onClick={() => setQty(qty > 1 ? qty - 1 : qty)}>
                    <FiChevronDown/>
                </button>
            </div>
            <Button className="w-full">
                <FiShoppingBag size={24} /> 
                Add To Cart
            </Button>
            <Button variant="dark" className="w-full">
                Checkout Now 
                <FiArrowRight size={24} />
            </Button>
        </div>
    )
}
export default ProductActions;