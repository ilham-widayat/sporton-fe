import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import { FiTrash2, FiArrowRight } from "react-icons/fi";
import Button from "./button";
import { useRouter } from "next/navigation";
export const cartList = [
    {
        name: "SportsOn Product 1",
        category: "Running",
        price: 450000,
        qty: 1,
        imgUrl: "product-1.png",
    },
    {
        name: "SportsOn Product 2",
        category: "Running",
        price: 250000,
        qty: 2,
        imgUrl: "product-2.png",
    },
    {
        name: "SportsOn Product 3",
        category: "Running",
        price: 230000,
        qty: 3,
        imgUrl: "product-3.png",
    },
    {
        name: "SportsOn Product 1",
        category: "Running",
        price: 450000,
        qty: 1,
        imgUrl: "product-1.png",
    },
    {
        name: "SportsOn Product 2",
        category: "Running",
        price: 250000,
        qty: 2,
        imgUrl: "product-2.png",
    },
    {
        name: "SportsOn Product 3",
        category: "Running",
        price: 230000,
        qty: 3,
        imgUrl: "product-3.png",
    },
];

const CartPopup = () => {
    const {push} = useRouter()
    const totalPrice = cartList.reduce((total, item ) => total + item.price * item.qty, 0)
    const handleCheckout = () =>{
        push('/checkout')
    }
    return (
        <div className="absolute top-full bg-white right-0 shadow-xl shadow-black/10 border border-gray-200 w-90 z-10">
            <div className="py-4 border-b border-gray-200 font-bold text-center">
                Shopping Cart
            </div>
            <div className="divide-y divide-gray-200 overflow-y-auto max-h-75">
                {
                    cartList.map((item, index) => (
                        <div key={index} className="p-4 flex items-center gap-3">
                            <div className="bg-primary-light aspect-square min-w-16 grid place-items-center">
                                <Image 
                                    src={`/images/products/${item.imgUrl}`}
                                    width="64"
                                    height="64"
                                    className="object-contain w-full h-full"
                                    alt={item.name}
                                />
                            </div>
                            <div className="flex-1 font-medium">
                                <span className="text-sm">{item.name}</span>
                                <div className="flex gap-2 text-xs">
                                    <span>{item.qty}x</span>
                                    <span className="text-primary">{priceFormatter(item.price)}</span>
                                </div>
                            </div>
                            <Button size="small" variant="ghost" className="p-0! size-7">
                                <FiTrash2/>
                            </Button>
                        </div>
                    ))
                }
            </div>
            <div className="border-t border-gray-200 p-4">
                <div className="flex items-center justify-between font-semibold">
                    <span className="text-sm">Total</span>
                    <span className="text-xs text-primary">{priceFormatter(totalPrice)}</span>
                </div>
                <Button className="w-full mt-4" variant="dark" size="small" onClick={handleCheckout}>
                    Checkout Now
                    <FiArrowRight/>
                </Button>
            </div>
        </div>
    );
}
export default CartPopup