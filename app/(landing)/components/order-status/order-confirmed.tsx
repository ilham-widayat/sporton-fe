'use client'

import Image from "next/image";

const OrderConfirmed = () => {
    return(
        <div className="bg-white w-160 p-16 flex flex-col items-center gap-4 mx-auto text-center">
            <Image
            src="/images/icon-order-confirmed.svg"
            width={117}
            height={117}
            alt="icon confirmed"
            />
            <h2 className="text-2xl font-semibold">Order Submitted!!</h2>
            <p>Your Order is recorded in our system, we are still confirming the payment status, please wait and your order status will be updated in less than 12 hours.</p>
        </div>
    )
}
export default OrderConfirmed;