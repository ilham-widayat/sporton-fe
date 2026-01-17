const OrderInformation = () => {
    return (
        <div className="bg-white">
            <div className="p-4 border-b border-gray-200">
                <h2 className="font-bold text-lg">Order Information</h2>
            </div>
            <div className="p-4 space-y-4">
                <div className="input-group">
                    <label htmlFor="full_name">Full Name</label>
                    <input type="text" placeholder="Type your full name" id="full_name"/>
                </div>
                <div className="input-group">
                    <label htmlFor="wa_number">Whatsapp Number</label>
                    <input type="text" placeholder="+62xxxx" id="wa_number"/>
                </div>
                <div className="input-group">
                    <label htmlFor="shipping_address">Shipping Address</label>
                    <textarea name="" id="shipping_address" placeholder="Example Street, 18, West Jakarta, Indonesia, 66521"
                    rows={7}></textarea>
                </div>
            </div>
        </div>
    )
}
export default OrderInformation;