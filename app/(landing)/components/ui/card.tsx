type TCard  = {
    title: string,
    children: React.ReactNode,

}
const Card = ({title, children}:TCard) => {
    return (
        <div className="bg-white">
            <div className="p-4 border-b border-gray-200">
                <h2 className="font-bold text-lg">{title}</h2>
            </div>
            {children}
        </div>
    )
}
export default Card;