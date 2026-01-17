import { cartList } from "../ui/cart-popup";
import Image from "next/image";
import Button from "../ui/button";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import priceFormatter from "@/app/utils/price-formatter";
const CartItems = () => {
    const totalPrice = cartList.reduce((total, item ) => total + item.price * item.qty, 0)
    return (
        <div className="bg-white">
            <div className="p-4 border-b border-gray-200">
                <h2 className="font-bold text-lg">Cart Items</h2>
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
                <Button className="w-full mt-4" variant="dark">
                    <FiCreditCard/>
                    Proceed to Payment
                </Button>
            </div>
        </div>
    )
}
export default CartItems;