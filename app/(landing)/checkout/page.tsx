import CartItems from "../components/checkout/cart-items";
import OrderInformation from "../components/checkout/order-information";

const Checkout = () => {
    return (
        <main className="bg-gray-100 min-h-screen py-40">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold text-center mb-10">Checkout Now</h1>
                <div className="grid grid-cols-2 gap-16">
                    <OrderInformation/>
                    <CartItems/>
                </div>
            </div>

        </main>
    )
}
export default Checkout;