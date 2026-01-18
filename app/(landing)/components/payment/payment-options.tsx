import { FiCreditCard } from "react-icons/fi";
import Card from "../ui/card";
const paymentList = [
    {
        bank_name: "BCA",
        bank_number: 13212313312,
        bank_holder: "PT SportOn Digital"
    },
    {
        bank_name: "BSI",
        bank_number: 132313312,
        bank_holder: "PT SportOn Digital"
    },
    {
        bank_name: "BNI",
        bank_number: 13212312312313312,
        bank_holder: "PT SportOn Digital"
    },
]

const PaymentOptions = () => {
    return (
        <Card title="Payment Options">
            <div className="divide-y divide-gray-200">
                {
                    paymentList.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 justify-between p-4">
                            <div className="size-13 bg-blue-100 grid place-items-center text-blue-500">
                                <FiCreditCard size={24}/>
                            </div>
                            <div className="flex-1 flex flex-col">
                                <span className="font-bold">{item.bank_name}</span>
                                <span className="text-sm">{item.bank_number}</span>
                                <span className="text-xs ">{item.bank_holder}</span>
                            </div>
                            <div className="text-xs bg-blue-100 py-1 px-2">Bank Transfer</div>
                        </div>
                    ))
                }
            </div>
        </Card>
    )
}
export default PaymentOptions;