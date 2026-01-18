'use client'
import { FiCheckCircle } from "react-icons/fi";
import Card from "../ui/card";
import priceFormatter from "@/app/utils/price-formatter";
import { cartList } from "../ui/cart-popup";
import Button from "../ui/button";
import FileUpload from "../ui/file-upload";
import { useRouter } from "next/navigation";

const PaymentSteps = () => {
    const { push } = useRouter();
    const totalPrice = cartList.reduce((total, item ) => total + item.price * item.qty, 0)

    const uploadAndConfirm = () => {
        push('/order-status/123')
    }
    
    return (
        <Card title="Payment Steps">
            <div className="p-4">
                <ol className="list-decimal pl-4 space-y-4 mb-5">
                    <li>Transfer the total amount of <b>{priceFormatter(totalPrice)}</b> to your preferred bank account listed under `Payment Options` (BCA, Mandiri, or BTPN).</li>
                    <li>After completing the transfer, <b>keep the payment receipt</b> or a screenshot of the transfer confirmation. This will be needed for the next step.</li>
                    <li>Upload the payment receipt/screenshot using the `<b>Upload Receipt & Confirm</b>` button below to validate your transaction.</li>
                </ol>
                <FileUpload/>
            </div>
            <div className="border-t border-gray-200 p-4">
                <div className="flex items-center justify-between font-semibold">
                    <span className="text-sm">Total</span>
                    <span className="text-xs text-primary">{priceFormatter(totalPrice)}</span>
                </div>
                <Button className="w-full mt-4" variant="dark"
                onClick={uploadAndConfirm}>
                    <FiCheckCircle/>
                    Upload Receipt & Confirm
                </Button>
            </div>
        </Card>
    )
}
export default PaymentSteps;